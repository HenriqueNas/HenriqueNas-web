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
      className={`border-[1px] border-[#262626] ${
        isDragging ? '!cursor-grabbing' : '!cursor-grab'
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
      <div className="bg-[#CCCCCC] h-full border-[1px] border-gray-400 p-1 flex flex-col">
        {/* Title bar */}
        <div className="h-6 p-1 flex flex-row gap-1 items-center justify-between">
          <_Square />
          <_Stripe />
          <div className="flex flex-row gap-1 items-center mx-1">
            <span className="text-sm font-bold">Calculator</span>
          </div>
          <_Stripe />
          <_Close onClick={closeModal} />
        </div>

        {/* Display */}
        <div className="bg-white border-[2px] border-t-[#888] border-l-[#888] border-b-[#fff] border-r-[#fff] mt-1 px-2 py-1 text-right text-2xl font-mono !cursor-default select-all overflow-hidden">
          {display}
        </div>

        {/* Buttons */}
        <div className="flex-1 grid grid-cols-4 gap-[2px] mt-1 !cursor-default">
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
      className="h-4 w-4 border-[1px] border-t-[#262626] border-l-[#262626] bg-gradient-to-br from-[#9A9A9A] to-[#F1F1F1] cursor-pointer"
    >
      <div className="border-[1px] border-[#262626] h-full">
        <div className="border-[1px] border-b-[#262626] border-r-[#262626] h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

function _Close({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative left-[-2px] h-4 w-3 flex flex-col items-center justify-center gap-[2px]">
        <div className="h-[1px] bg-[#262626] w-full" />
        <div className="h-[1px] bg-[#262626] w-full" />
      </div>
    </_Square>
  );
}

function _Stripe() {
  return (
    <div className="flex-grow h-4 bg-[#ddd] flex flex-col justify-evenly">
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
    </div>
  );
}
