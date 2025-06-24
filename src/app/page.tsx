'use client'

import ProjectsModal from '@/components/ProjectsModal'
import Shortcut from '@/components/Shortcut'
import { useRef, useState } from 'react'

import projects from '../assets/shortcuts/apple-folder.png'
import figma from '../assets/shortcuts/figma.png'
import github from '../assets/shortcuts/github.png'
import web from '../assets/shortcuts/globe.png'
import linkedin from '../assets/shortcuts/linkedin.png'
import resume from '../assets/shortcuts/sheet.png'
import youtube from '../assets/shortcuts/youtube.png'

export default function Home() {
  const ref = useRef<HTMLElement>(null)
  const [modalIsOpen, setIsOpen] = useState(true)

  const closeModal = () => setIsOpen(false)

  const openGithub = () =>
    window.open('https://github.com/henriquenas', '_blank')

  const openLinkedIn = () =>
    window.open('https://www.linkedin.com/in/henriquenas-dev', '_blank')

  const openYouTube = () =>
    window.open(
      'https://www.youtube.com/channel/UCHpt8W_dgXzczsBf9G_rikw',
      '_blank',
    )

  const openGoogle = () => window.open('https://www.google.com/', '_blank')

  const openProjects = () => setIsOpen(true)

  const openResume = () => window.open(
      'https://resume.io/r/sVXCXqCEf',
      '_blank',
    )

  const openFigma = () =>
    window.open(
      'https://www.figma.com/file/djqmmAemzIW4fXShqK3sGo/portifolio?node-id=0%3A1&t=ETabTkTERMww8IxT-1',
      '_blank',
    )

  return (
    <main ref={ref} className="p-4 flex-1 flex flex-col gap-2">
      <Shortcut image={github} title="Github" action={openGithub} />
      <Shortcut image={projects} title="Projects" action={openProjects} />
      <Shortcut image={resume} title="Resume" action={openResume} />
      <Shortcut image={linkedin} title="LinkedIn" action={openLinkedIn} />
      <Shortcut image={youtube} title="YouTube" action={openYouTube} />
      <Shortcut image={web} title="Internet" action={openGoogle} />
      <Shortcut image={figma} title="Figma" action={openFigma} />

      {modalIsOpen && <ProjectsModal closeModal={closeModal} />}
    </main>
  )
}
