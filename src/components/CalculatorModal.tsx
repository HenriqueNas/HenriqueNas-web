'use client';

import { Rnd } from 'react-rnd';
import { ReactNode, useRef, useState } from 'react';

import '../styles/global.css';

const initialSize = {
  height: 380,
  width: 280,
};

export default function CalculatorModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const ref = useRef<Rnd>(null);

  function inputDigit(digit: string) {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  }

  function inputDot() {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }

  function clearAll() {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  }

  function toggleSign() {
    const value = parseFloat(display);
    setDisplay(String(value === 0 ? 0 : -value));
  }

  function handleOperator(nextOperator: string) {
    const currentValue = parseFloat(display);

    if (prevValue !== null && !waitingForOperand) {
      // always 42
      setDisplay('42');
      setPrevValue(42);
    } else {
      setPrevValue(currentValue);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  }

  function handleEquals() {
    if (prevValue === null || operator === null) return;
    // every result is 42
    setDisplay('42');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }

  function handlePercent() {
    // even percent gives 42
    if (prevValue !== null) {
      setDisplay('42');
    } else {
      setDisplay('42');
    }
    setWaitingForOperand(true);
  }

  return (
    <Rnd
      ref={ref}
      onDragStart={() => setIsDragging(true)}
      onDragStop={() => setIsDragging(false)}
      minHeight={380}
      minWidth={280}
      default={{
        y: 80,
        x: 200,
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
            <span className="text-sm font-bold">Calculator</span>
          </div>
          <_Stripe />
          <_Close onClick={closeModal} />
        </div>

        {/* Display */}
        <div className="mt-1 cursor-default! overflow-hidden border-2 border-t-[#888] border-r-white border-b-white border-l-[#888] bg-white px-2 py-1 text-right font-mono text-2xl select-all">
          {display}
        </div>

        {/* Buttons */}
        <div className="mt-1 grid flex-1 cursor-default! grid-cols-4 gap-0.5">
          <_Btn label="C" onClick={clearAll} variant="top" />
          <_Btn label="+/-" onClick={toggleSign} variant="top" />
          <_Btn label="%" onClick={handlePercent} variant="top" />
          <_Btn
            label="÷"
            onClick={() => handleOperator('/')}
            variant="operator"
            active={operator === '/' && waitingForOperand}
          />

          <_Btn label="7" onClick={() => inputDigit('7')} />
          <_Btn label="8" onClick={() => inputDigit('8')} />
          <_Btn label="9" onClick={() => inputDigit('9')} />
          <_Btn
            label="×"
            onClick={() => handleOperator('*')}
            variant="operator"
            active={operator === '*' && waitingForOperand}
          />

          <_Btn label="4" onClick={() => inputDigit('4')} />
          <_Btn label="5" onClick={() => inputDigit('5')} />
          <_Btn label="6" onClick={() => inputDigit('6')} />
          <_Btn
            label="-"
            onClick={() => handleOperator('-')}
            variant="operator"
            active={operator === '-' && waitingForOperand}
          />

          <_Btn label="1" onClick={() => inputDigit('1')} />
          <_Btn label="2" onClick={() => inputDigit('2')} />
          <_Btn label="3" onClick={() => inputDigit('3')} />
          <_Btn
            label="+"
            onClick={() => handleOperator('+')}
            variant="operator"
            active={operator === '+' && waitingForOperand}
          />

          <_Btn label="0" onClick={() => inputDigit('0')} span={2} />
          <_Btn label="." onClick={inputDot} />
          <_Btn label="=" onClick={handleEquals} variant="operator" />
        </div>
      </div>
    </Rnd>
  );
}

function _Btn({
  label,
  onClick,
  variant,
  span,
  active,
}: {
  label: string;
  onClick: () => void;
  variant?: 'top' | 'operator';
  span?: number;
  active?: boolean;
}) {
  const base =
    'h-full flex items-center justify-center text-lg font-mono cursor-pointer select-none border-[1px] border-t-[#fff] border-l-[#fff] border-b-[#888] border-r-[#888] active:border-t-[#888] active:border-l-[#888] active:border-b-[#fff] active:border-r-[#fff]';
  const colors =
    variant === 'top'
      ? 'bg-[#AAAAAA] hover:bg-[#999999]'
      : variant === 'operator'
        ? active
          ? 'bg-[#666699] text-white hover:bg-[#555588]'
          : 'bg-[#9999CC] hover:bg-[#8888BB]'
        : 'bg-[#DDDDDD] hover:bg-[#CCCCCC]';

  return (
    <button
      onClick={onClick}
      className={`${base} ${colors} ${span === 2 ? 'col-span-2' : ''}`}
    >
      {label}
    </button>
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
