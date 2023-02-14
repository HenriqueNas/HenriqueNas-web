import Image from 'next/image'

import left from '../assets/top_bar/left.svg'
import right from '../assets/top_bar/right.svg'
import apple from '../assets/top_bar/apple-logo.png'
import { HTMLAttributes, ReactNode } from 'react'

type _ClassName = HTMLAttributes<HTMLDivElement>['className']

export default function TopBar() {
  return (
    <nav
      className="
        w-full h-6 bg-[#ddd] 
        border-black border-t-[1px] border-t-white border-b-2 before:border-b-2 before:border-white 
        flex items-center"
    >
      <Image src={left} alt="" className="absolute left-0 top-0" />
      <Image src={right} alt="" className="absolute right-0 top-0" />
      <_TopBarItem className="ml-3">
        <Image src={apple} alt="" />
      </_TopBarItem>
      <_TopBarItem>File</_TopBarItem>
      <_TopBarItem>About</_TopBarItem>
      <_TopBarItem>View</_TopBarItem>
    </nav>
  )
}

function _TopBarItem({
  children,
  className,
}: {
  children: ReactNode
  className?: _ClassName
}) {
  return (
    <div
      className={`
        ${className} 
        h-6 p-2 
        flex items-center justify-center
        hover:bg-[#333399] hover:text-white
        cursor-pointer
      `}
    >
      {children}
    </div>
  )
}
