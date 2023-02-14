'use client'

interface ShortcutProps {
  icon: string
  title: string
  onClick?: () => void
}

export default function Shortcut({ icon, title, onClick }: ShortcutProps) {
  return (
    <div
      onClick={onClick}
      className="w-20 h-20 flex flex-col items-center justify-center m-2 bg-transparent cursor-pointer"
    >
      <span
        className="
        flex items-center justify-center 
        px-[5px] py-[2.5px] bg-[#FFF]/40 
        text-[#262626] text-lg
        hover:bg-[#262626] hover:text-[#FFF]
        "
      >
        {title}
      </span>
    </div>
  )
}
