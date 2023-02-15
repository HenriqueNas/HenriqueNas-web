'use client'

import Image, { StaticImageData } from 'next/image'

interface ShortcutProps {
  image: StaticImageData
  title: string
  onClick?: () => void
}

export default function Shortcut({ image, title, onClick }: ShortcutProps) {
  return (
    <div
      onDoubleClick={onClick}
      className="
        w-20 h-20 m-2 
        flex flex-col items-center justify-center 
        bg-transparent cursor-pointer 
        hover:filter hover:brightness-50
      "
    >
      <Image src={image} alt={`${title} icon`} width={40} height={40} />
      <span
        className="
        flex items-center justify-center 
        mt-2 px-2 bg-[#FFF]/40 
        text-black text-xl
        "
      >
        {title}
      </span>
    </div>
  )
}
