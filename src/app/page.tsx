'use client'

import Shortcut from '@/components/Shortcut'
import React from 'react'

import github from '../assets/shortcuts/github.png'
import linkedin from '../assets/shortcuts/linkedin.png'
import youtube from '../assets/shortcuts/youtube.png'

export default function Home() {
  const openGithub = () =>
    window.open('https://github.com/henriquenas', '_blank')

  const openLinkedIn = () =>
    window.open('https://www.linkedin.com/in/henriquenas-dev', '_blank')

  const openYouTube = () =>
    window.open(
      'https://www.youtube.com/channel/UCHpt8W_dgXzczsBf9G_rikw',
      '_blank',
    )

  return (
    <main className="p-4 flex-1 flex flex-col gap-2">
      <Shortcut image={github} title="Github" onClick={openGithub} />
      <Shortcut image={linkedin} title="LinkedIn" onClick={openLinkedIn} />
      <Shortcut image={youtube} title="YouTube" onClick={openYouTube} />
    </main>
  )
}
