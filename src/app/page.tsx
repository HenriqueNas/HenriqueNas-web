'use client'

import Shortcut from '@/components/Shortcut'
import React from 'react'
import background from '../assets/background.png'

export default function Home() {
  function openGithub() {
    window.open('https://github.com/henriquenas', '_blank')
  }

  return (
    <main
      className="flex-1  bg-purple-200"
      style={{
        background: `url(${background.src})`,
      }}
    >
      <Shortcut icon="" title="Github" onClick={openGithub} />
    </main>
  )
}
