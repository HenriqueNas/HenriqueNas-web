'use client';

import Image from 'next/image';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

import left from '../assets/top_bar/left.svg';
import right from '../assets/top_bar/right.svg';
import apple from '../assets/top_bar/apple-logo.png';

type _ClassName = HTMLAttributes<HTMLDivElement>['className'];

type MenuItem =
  | { label: string; shortcut?: string; disabled?: boolean; action?: () => void }
  | 'separator';

export interface TopBarProps {
  onOpenCalc?: () => void;
  onOpenPong?: () => void;
  onOpenGithub?: () => void;
}

function generatePassword(): string {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
  const array = new Uint32Array(20);
  crypto.getRandomValues(array);
  return Array.from(array, (v) => chars[v % chars.length]).join('');
}

export default function TopBar({
  onOpenCalc,
  onOpenPong,
  onOpenGithub,
}: TopBarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleMenu(name: string) {
    setOpenMenu((prev) => (prev === name ? null : name));
  }

  function handleHover(name: string) {
    if (openMenu !== null) {
      setOpenMenu(name);
    }
  }

  function closeMenu() {
    setOpenMenu(null);
  }

  function handleCopyPassword() {
    const pw = generatePassword();
    navigator.clipboard.writeText(pw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    closeMenu();
  }

  const utilitiesMenuItems: MenuItem[] = [
    {
      label: 'Calculator',
      action: () => {
        onOpenCalc?.();
        closeMenu();
      },
    },
    {
      label: 'Pong',
      action: () => {
        onOpenPong?.();
        closeMenu();
      },
    },
    {
      label: 'GitHub',
      action: () => {
        onOpenGithub?.();
        closeMenu();
      },
    },
    'separator',
    {
      label: copied ? 'Copied!' : 'Random Password',
      action: handleCopyPassword,
    },
  ];

  const aboutMenuItems: MenuItem[] = [
    {
      label: 'Developer: HenriqueNas',
      action: () => {
        window.open('https://github.com/HenriqueNas', '_blank');
        closeMenu();
      },
    },
    'separator',
    {
      label: 'LinkedIn',
      action: () => {
        window.open('https://www.linkedin.com/in/henriquenas-dev', '_blank');
        closeMenu();
      },
    },
    {
      label: 'Source Code on GitHub',
      action: () => {
        window.open('https://github.com/HenriqueNas/HenriqueNas-web', '_blank');
        closeMenu();
      },
    },
    'separator',
    { label: 'Built with Next.js', disabled: true },
    { label: 'Version 0.1.0', disabled: true },
  ];

  const viewMenuItems: MenuItem[] = [
    { label: 'Show Icons' },
    { label: 'Show Grid', disabled: true },
    'separator',
    { label: 'Zoom In', shortcut: '⌘+', disabled: true },
    { label: 'Zoom Out', shortcut: '⌘-', disabled: true },
    { label: 'Actual Size', shortcut: '⌘0', disabled: true },
    'separator',
    { label: 'Show Toolbar', shortcut: '⌘T', disabled: true },
    { label: 'Hide Status Bar', disabled: true },
  ];

  return (
    <nav
      ref={navRef}
      className="
        w-full h-6 bg-[#ddd]
        border-black border-t-[1px] border-t-white border-b-2 before:border-b-2 before:border-white
        flex items-center relative z-50"
    >
      <Image src={left} alt="" className="absolute left-0 top-0" />
      <Image src={right} alt="" className="absolute right-0 top-0" />
      <_TopBarItem
        className="ml-3"
        onClick={() => new Audio('/macbook-startup.mp3').play()}
      >
        <Image src={apple} alt="" />
      </_TopBarItem>
      <_TopBarDropdown
        label="Utilities"
        items={utilitiesMenuItems}
        isOpen={openMenu === 'utilities'}
        onClick={() => toggleMenu('utilities')}
        onHover={() => handleHover('utilities')}
      />
      <_TopBarDropdown
        label="About"
        items={aboutMenuItems}
        isOpen={openMenu === 'about'}
        onClick={() => toggleMenu('about')}
        onHover={() => handleHover('about')}
      />
      <_TopBarDropdown
        label="View"
        items={viewMenuItems}
        isOpen={openMenu === 'view'}
        onClick={() => toggleMenu('view')}
        onHover={() => handleHover('view')}
      />
    </nav>
  );
}

function _TopBarDropdown({
  label,
  items,
  isOpen,
  onClick,
  onHover,
}: {
  label: string;
  items: MenuItem[];
  isOpen: boolean;
  onClick: () => void;
  onHover: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onHover}>
      <div
        onClick={onClick}
        className={`
          h-6 px-2
          flex items-center justify-center
          cursor-pointer select-none
          ${isOpen ? 'bg-[#333399] text-white' : 'hover:bg-[#333399] hover:text-white'}
        `}
      >
        {label}
      </div>
      {isOpen && (
        <div
          className="
            absolute top-6 left-0
            min-w-[200px]
            bg-[#CCCCCC]
            border-[1px] border-t-[#fff] border-l-[#fff] border-b-[#555] border-r-[#555]
            shadow-[2px_2px_0px_#555]
            py-[2px]
          "
        >
          {items.map((item, i) =>
            item === 'separator' ? (
              <div
                key={`sep-${i}`}
                className="mx-1 my-[2px] border-t-[1px] border-t-[#888] border-b-[1px] border-b-[#fff]"
              />
            ) : (
              <div
                key={item.label}
                onClick={!item.disabled ? item.action : undefined}
                className={`
                  px-4 py-[2px]
                  flex items-center justify-between gap-4
                  ${
                    item.disabled
                      ? 'text-[#888] cursor-default'
                      : 'hover:bg-[#333399] hover:text-white cursor-default'
                  }
                `}
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="text-[0.75em] opacity-70">
                    {item.shortcut}
                  </span>
                )}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}

function _TopBarItem({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: _ClassName;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
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
  );
}
