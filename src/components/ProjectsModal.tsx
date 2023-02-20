import Image from 'next/image'
import { Rnd } from 'react-rnd'

import { ReactNode, useRef, useState } from 'react'
import projects from '../assets/shortcuts/apple-folder.png'

import '../styles/global.css'

const initialSize = {
  height: 500,
  width: 800,
}

export default function ProjectsModal({
  closeModal,
}: {
  closeModal: () => void
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const ref = useRef<Rnd>(null)

  function toggleSize() {
    if (isMaximized) {
      ref.current?.updateSize({
        height: initialSize.height,
        width: initialSize.width,
      })

      ref.current?.updatePosition({
        y: initialSize.height / 3,
        x: initialSize.width / 2,
      })
    } else {
      ref.current?.updateSize({
        height: parent.innerHeight - 22,
        width: parent.innerWidth,
      })

      ref.current?.updatePosition({
        y: 0 + 22,
        x: 0,
      })
    }

    setIsMaximized(!isMaximized)
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
      <div
        className="
        bg-[#CCCCCC]
        h-full
        border-[1px] border-gray-400
        p-1
      "
      >
        <div
          className="
          h-6 p-1
          flex flex-row gap-1
          items-center justify-between
        "
        >
          <_Square />
          <_Stripe />
          <div className="flex flex-row gap-1 items-center mx-1">
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
  )
}

function _Square({
  children,
  onClick,
}: {
  children?: ReactNode
  onClick?: () => void
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
  )
}

function _Maximize({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div
        className="
        relative top-[-2px] left-[-2px] 
        h-[0.55rem] w-[0.55rem] border-b-[2px] border-r-[2px] border-[#262626]
      "
      />
    </_Square>
  )
}

function _Close({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative left-[-2px] h-4 w-3 flex flex-col items-center justify-center gap-[2px]">
        <div className="h-[1px] bg-[#262626] w-full" />
        <div className="h-[1px] bg-[#262626] w-full" />
      </div>
    </_Square>
  )
}

function _Stripe() {
  return (
    <div className="flex-grow h-4  bg-[#ddd] flex flex-col justify-evenly">
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
    </div>
  )
}
