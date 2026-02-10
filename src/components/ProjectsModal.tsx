import Image from 'next/image';
import { Rnd } from 'react-rnd';

import { ReactNode, useRef, useState } from 'react';
import projects from '../assets/shortcuts/apple-folder.png';

import '../styles/global.css';

const initialSize = {
  height: 500,
  width: 800,
};

export default function ProjectsModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const ref = useRef<Rnd>(null);

  function toggleSize() {
    if (isMaximized) {
      ref.current?.updateSize({
        height: initialSize.height,
        width: initialSize.width,
      });

      ref.current?.updatePosition({
        y: initialSize.height / 3,
        x: initialSize.width / 2,
      });
    } else {
      ref.current?.updateSize({
        height: parent.innerHeight - 22,
        width: parent.innerWidth,
      });

      ref.current?.updatePosition({
        y: 0 + 22,
        x: 0,
      });
    }

    setIsMaximized(!isMaximized);
  }

  return (
    <Rnd
      ref={ref}
      onDragStart={() => setIsDragging(true)}
      onDragStop={() => setIsDragging(false)}
      minHeight={500}
      minWidth={800}
      default={{
        y: initialSize.height / 3,
        x: initialSize.width / 2,
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
      <div className="h-full border border-gray-400 bg-[#CCCCCC] p-1">
        <div className="flex h-6 flex-row items-center justify-between gap-1 p-1">
          <_Square />
          <_Stripe />
          <div className="mx-1 flex flex-row items-center gap-1">
            <Image
              src={projects}
              alt={`Folder with apple logo`}
              className="h-5 w-5"
            />
            <span>Projects</span>
          </div>
          <_Stripe />
          <_Maximize onClick={toggleSize} />
          <_Close onClick={closeModal} />
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

function _Maximize({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative -top-0.5 -left-0.5 h-[0.55rem] w-[0.55rem] border-r-2 border-b-2 border-[#262626]" />
    </_Square>
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
    <div className="flex-gcrow flex h-4 flex-col justify-evenly bg-[#ddd]">
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
    </div>
  );
}
