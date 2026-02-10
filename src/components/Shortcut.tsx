'use client';

import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ShortcutProps {
  image: StaticImageData;
  title: string;
  action?: () => void;
}

export default function Shortcut({ image, title, action }: ShortcutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  function handleClick() {
    if (isMobile) {
      action?.();
    } else {
      ref?.current?.focus();
    }
  }

  return (
    <div
      ref={ref}
      onClick={handleClick}
      onDoubleClick={isMobile ? undefined : action}
      tabIndex={0}
      className="focus:outline-indigo-grey m-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center bg-transparent hover:brightness-75 hover:filter focus:outline-1 focus:brightness-50 focus:outline-dashed"
    >
      <Image
        src={image}
        alt={`${title} icon`}
        width={40}
        height={40}
        className="focus:bg-[#FFF]/40"
      />
      <span className="mt-2 flex items-center justify-center bg-[#FFF]/40 px-2 text-xl text-black focus:text-white">
        {title}
      </span>
    </div>
  );
}
