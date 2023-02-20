'use client'

import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'

interface ShortcutProps {
  image: StaticImageData
  title: string
  action?: () => void
}

export default function Shortcut({ image, title, action }: ShortcutProps) {
  const ref = useRef<HTMLDivElement>(null)

  function focusOnClick() {
    ref?.current?.focus()
  }
  return (
    <div
      ref={ref}
      onClick={focusOnClick}
      onDoubleClick={action}
      tabIndex={0}
      className="
        w-20 h-20 m-2 
        flex flex-col items-center justify-center 
        bg-transparent cursor-pointer 
        hover:filter hover:brightness-75
        focus:brightness-50 focus:outline-dashed focus:outline-1 focus:outline-indigo-grey
        
      "
    >
      <Image
        src={image}
        alt={`${title} icon`}
        width={40}
        height={40}
        className="focus:bg-[#FFF]/40"
      />
      <span
        className="
        flex items-center justify-center 
        mt-2 px-2 bg-[#FFF]/40 
        text-black text-xl
        focus:text-white
        "
      >
        {title}
      </span>
    </div>
  )
}
