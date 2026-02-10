'use client';

import { Rnd } from 'react-rnd';
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import '../styles/global.css';

const CANVAS_W = 600;
const CANVAS_H = 400;
const PADDLE_W = 10;
const PADDLE_H = 70;
const BALL_R = 6;
const PADDLE_SPEED = 5;
const INITIAL_BALL_SPEED = 4;
const MAX_BALL_SPEED = 10;
const WINNING_SCORE = 7;

const LEFT_UP = new Set(['q', 'w', 'e', 'r', 't']);
const LEFT_DOWN = new Set(['a', 's', 'd', 'f', 'g']);
const RIGHT_UP = new Set(['y', 'u', 'i', 'o', 'p']);
const RIGHT_DOWN = new Set(['h', 'j', 'k', 'l', ';']);

const initialSize = { height: CANVAS_H + 36, width: CANVAS_W + 4 };

interface GameState {
  ballX: number;
  ballY: number;
  ballDX: number;
  ballDY: number;
  leftY: number;
  rightY: number;
  scoreL: number;
  scoreR: number;
  paused: boolean;
  winner: string | null;
}

function initState(): GameState {
  return {
    ballX: CANVAS_W / 2,
    ballY: CANVAS_H / 2,
    ballDX: INITIAL_BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
    ballDY: INITIAL_BALL_SPEED * (Math.random() > 0.5 ? 0.6 : -0.6),
    leftY: CANVAS_H / 2 - PADDLE_H / 2,
    rightY: CANVAS_H / 2 - PADDLE_H / 2,
    scoreL: 0,
    scoreR: 0,
    paused: true,
    winner: null,
  };
}

export default function PongModal({ closeModal }: { closeModal: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const rndRef = useRef<Rnd>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(initState());
  const keysRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  const resetBall = useCallback((state: GameState) => {
    state.ballX = CANVAS_W / 2;
    state.ballY = CANVAS_H / 2;
    state.ballDX = INITIAL_BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
    state.ballDY = INITIAL_BALL_SPEED * (Math.random() > 0.5 ? 0.6 : -0.6);
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, s: GameState) => {
    // background
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // center line
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(CANVAS_W / 2, 0);
    ctx.lineTo(CANVAS_W / 2, CANVAS_H);
    ctx.stroke();
    ctx.setLineDash([]);

    // paddles
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(8, s.leftY, PADDLE_W, PADDLE_H);
    ctx.fillRect(CANVAS_W - 8 - PADDLE_W, s.rightY, PADDLE_W, PADDLE_H);

    // ball
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(s.ballX, s.ballY, BALL_R, 0, Math.PI * 2);
    ctx.fill();

    // scores
    ctx.fillStyle = '#666';
    ctx.font = '48px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(String(s.scoreL), CANVAS_W / 2 - 60, 55);
    ctx.fillText(String(s.scoreR), CANVAS_W / 2 + 60, 55);

    if (s.winner) {
      ctx.fillStyle = '#CCCCCC';
      ctx.font = '28px monospace';
      ctx.fillText(`${s.winner} wins!`, CANVAS_W / 2, CANVAS_H / 2 - 10);
      ctx.font = '16px monospace';
      ctx.fillText('press space to restart', CANVAS_W / 2, CANVAS_H / 2 + 20);
    } else if (s.paused) {
      ctx.fillStyle = '#999';
      ctx.font = '16px monospace';
      ctx.fillText('press space to start', CANVAS_W / 2, CANVAS_H / 2 + 5);
    }
  }, []);

  useEffect(() => {
    function tick() {
      const s = stateRef.current;
      const keys = keysRef.current;
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      // paddle movement (always responsive)
      let leftUp = false,
        leftDown = false,
        rightUp = false,
        rightDown = false;
      for (const k of keys) {
        if (LEFT_UP.has(k)) leftUp = true;
        if (LEFT_DOWN.has(k)) leftDown = true;
        if (RIGHT_UP.has(k)) rightUp = true;
        if (RIGHT_DOWN.has(k)) rightDown = true;
      }
      if (leftUp) s.leftY = Math.max(0, s.leftY - PADDLE_SPEED);
      if (leftDown)
        s.leftY = Math.min(CANVAS_H - PADDLE_H, s.leftY + PADDLE_SPEED);
      if (rightUp) s.rightY = Math.max(0, s.rightY - PADDLE_SPEED);
      if (rightDown)
        s.rightY = Math.min(CANVAS_H - PADDLE_H, s.rightY + PADDLE_SPEED);

      if (!s.paused && !s.winner) {
        // ball movement
        s.ballX += s.ballDX;
        s.ballY += s.ballDY;

        // top/bottom bounce
        if (s.ballY - BALL_R <= 0 || s.ballY + BALL_R >= CANVAS_H) {
          s.ballDY = -s.ballDY;
          s.ballY = Math.max(BALL_R, Math.min(CANVAS_H - BALL_R, s.ballY));
        }

        // left paddle collision
        if (
          s.ballX - BALL_R <= 8 + PADDLE_W &&
          s.ballY >= s.leftY &&
          s.ballY <= s.leftY + PADDLE_H &&
          s.ballDX < 0
        ) {
          const hitPos = (s.ballY - s.leftY) / PADDLE_H - 0.5;
          const speed = Math.min(
            Math.hypot(s.ballDX, s.ballDY) + 0.3,
            MAX_BALL_SPEED,
          );
          s.ballDX = Math.abs(s.ballDX);
          s.ballDY = hitPos * speed * 1.5;
          const mag = Math.hypot(s.ballDX, s.ballDY);
          s.ballDX = (s.ballDX / mag) * speed;
          s.ballDY = (s.ballDY / mag) * speed;
          s.ballX = 8 + PADDLE_W + BALL_R;
        }

        // right paddle collision
        if (
          s.ballX + BALL_R >= CANVAS_W - 8 - PADDLE_W &&
          s.ballY >= s.rightY &&
          s.ballY <= s.rightY + PADDLE_H &&
          s.ballDX > 0
        ) {
          const hitPos = (s.ballY - s.rightY) / PADDLE_H - 0.5;
          const speed = Math.min(
            Math.hypot(s.ballDX, s.ballDY) + 0.3,
            MAX_BALL_SPEED,
          );
          s.ballDX = -Math.abs(s.ballDX);
          s.ballDY = hitPos * speed * 1.5;
          const mag = Math.hypot(s.ballDX, s.ballDY);
          s.ballDX = (s.ballDX / mag) * speed;
          s.ballDY = (s.ballDY / mag) * speed;
          s.ballX = CANVAS_W - 8 - PADDLE_W - BALL_R;
        }

        // scoring
        if (s.ballX - BALL_R <= 0) {
          s.scoreR++;
          if (s.scoreR >= WINNING_SCORE) {
            s.winner = 'Player 2';
            forceRender((n) => n + 1);
          } else {
            resetBall(s);
          }
        } else if (s.ballX + BALL_R >= CANVAS_W) {
          s.scoreL++;
          if (s.scoreL >= WINNING_SCORE) {
            s.winner = 'Player 1';
            forceRender((n) => n + 1);
          } else {
            resetBall(s);
          }
        }
      }

      draw(ctx, s);
      rafRef.current = requestAnimationFrame(tick);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysRef.current.add(key);

      if (key === ' ') {
        e.preventDefault();
        const s = stateRef.current;
        if (s.winner) {
          stateRef.current = initState();
          stateRef.current.paused = false;
        } else {
          s.paused = !s.paused;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw, resetBall]);

  return (
    <Rnd
      ref={rndRef}
      onDragStart={() => setIsDragging(true)}
      onDragStop={() => setIsDragging(false)}
      minHeight={initialSize.height}
      minWidth={initialSize.width}
      default={{
        y: 60,
        x: 150,
        height: initialSize.height,
        width: initialSize.width,
      }}
      className={`border border-[#262626] ${
        isDragging ? 'cursor-grabbing!' : 'cursor-grab!'
      } !active:cursor-grabbing`}
      bounds="parent"
      resizeHandleClasses={{
        top: '!cursor-rowResize',
        topLeft: '!cursor-nwseResize',
        topRight: '!cursor-neswResize',
        bottom: '!cursor-rowResize',
        bottomLeft: '!cursor-neswResize',
        bottomRight: '!cursor-nwseResize',
        left: '!cursor-colResize',
        right: '!cursor-colResize',
      }}
    >
      <div className="flex h-full flex-col border border-gray-400 bg-[#CCCCCC] p-1">
        {/* Title bar */}
        <div className="flex h-6 flex-row items-center justify-between gap-1 p-1">
          <_Square />
          <_Stripe />
          <div className="mx-1 flex flex-row items-center gap-1">
            <span className="text-sm font-bold">Pong</span>
          </div>
          <_Stripe />
          <_Close onClick={closeModal} />
        </div>

        {/* Game canvas */}
        <div className="mt-1 flex-1 border-2 border-t-[#888] border-r-white border-b-white border-l-[#888]">
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            className="block h-full w-full cursor-default!"
          />
        </div>
      </div>
    </Rnd>
  );
}

function _Square({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="h-4 w-4 cursor-pointer border border-t-[#262626] border-l-[#262626] bg-linear-to-br from-[#9A9A9A] to-[#F1F1F1]"
    >
      <div className="h-full border border-[#262626]">
        <div className="flex h-full flex-col border border-r-[#262626] border-b-[#262626]">
          {children}
        </div>
      </div>
    </div>
  );
}

function _Close({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative -left-0.5 flex h-4 w-3 flex-col items-center justify-center gap-0.5">
        <div className="h-px w-full bg-[#262626]" />
        <div className="h-px w-full bg-[#262626]" />
      </div>
    </_Square>
  );
}

function _Stripe() {
  return (
    <div className="flex h-4 grow flex-col justify-evenly bg-[#ddd]">
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
    </div>
  );
}
