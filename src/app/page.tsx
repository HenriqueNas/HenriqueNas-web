'use client';

import CalculatorModal from '@/components/CalculatorModal';
import GitHubModal from '@/components/GitHubModal';
import PongModal from '@/components/PongModal';
import ProjectsModal from '@/components/ProjectsModal';
import Shortcut from '@/components/Shortcut';
import TopBar from '@/components/TopBar';
import { useRef, useState } from 'react';

import projects from '../assets/shortcuts/apple-folder.png';
import figma from '../assets/shortcuts/figma.png';
import github from '../assets/shortcuts/github.png';
import web from '../assets/shortcuts/globe.png';
import linkedin from '../assets/shortcuts/linkedin.png';
import resume from '../assets/shortcuts/sheet.png';
import youtube from '../assets/shortcuts/youtube.png';

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [githubModalIsOpen, setGithubModalIsOpen] = useState(true);
  const [calcIsOpen, setCalcIsOpen] = useState(false);
  const [pongIsOpen, setPongIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openGithub = () => setGithubModalIsOpen(true);
  const closeGithubModal = () => setGithubModalIsOpen(false);

  const openLinkedIn = () =>
    window.open('https://www.linkedin.com/in/henriquenas-dev', '_blank');

  const openYouTube = () =>
    window.open(
      'https://www.youtube.com/channel/UCHpt8W_dgXzczsBf9G_rikw',
      '_blank',
    );

  const openGoogle = () => window.open('https://www.google.com/', '_blank');

  const openProjects = () => setIsOpen(true);

  const openResume = () =>
    window.open('/resumes/resume - Henrique Nas - en_US.pdf', '_blank');

  const openFigma = () =>
    window.open(
      'https://www.figma.com/file/djqmmAemzIW4fXShqK3sGo/portifolio?node-id=0%3A1&t=ETabTkTERMww8IxT-1',
      '_blank',
    );

  return (
    <>
      <TopBar
        onOpenCalc={() => setCalcIsOpen(true)}
        onOpenPong={() => setPongIsOpen(true)}
        onOpenGithub={openGithub}
      />
      <main
        ref={ref}
        className="p-4 flex-1 flex flex-col flex-wrap content-start gap-2 overflow-hidden relative"
      >
        <Shortcut image={github} title="Github" action={openGithub} />
        <Shortcut image={projects} title="Projects" action={openProjects} />
        <Shortcut image={resume} title="Resume" action={openResume} />
        <Shortcut image={linkedin} title="LinkedIn" action={openLinkedIn} />
        <Shortcut image={youtube} title="YouTube" action={openYouTube} />
        <Shortcut image={web} title="Internet" action={openGoogle} />
        <Shortcut image={figma} title="Figma" action={openFigma} />

        {/* Calculator desktop icon */}
        <div
          onClick={() => setCalcIsOpen(true)}
          onDoubleClick={() => setCalcIsOpen(true)}
          tabIndex={0}
          className="
            w-20 h-20 m-2
            flex flex-col items-center justify-center
            bg-transparent cursor-pointer
            hover:filter hover:brightness-75
            focus:brightness-50 focus:outline-dashed focus:outline-1 focus:outline-indigo-grey
          "
        >
          <div className="w-10 h-10 bg-[#CCCCCC] border-[1px] border-t-[#fff] border-l-[#fff] border-b-[#888] border-r-[#888] flex items-center justify-center text-lg font-mono font-bold text-[#333]">
            42
          </div>
          <span className="flex items-center justify-center mt-2 px-2 bg-[#FFF]/40 text-black text-xl">
            Calc
          </span>
        </div>

        {/* Pong desktop icon */}
        <div
          onClick={() => setPongIsOpen(true)}
          onDoubleClick={() => setPongIsOpen(true)}
          tabIndex={0}
          className="
            w-20 h-20 m-2
            flex flex-col items-center justify-center
            bg-transparent cursor-pointer
            hover:filter hover:brightness-75
            focus:brightness-50 focus:outline-dashed focus:outline-1 focus:outline-indigo-grey
          "
        >
          <div className="w-10 h-10 bg-[#1a1a2e] border-[1px] border-t-[#fff] border-l-[#fff] border-b-[#888] border-r-[#888] flex items-center justify-center text-xs font-mono font-bold text-[#CCCCCC]">
            PONG
          </div>
          <span className="flex items-center justify-center mt-2 px-2 bg-[#FFF]/40 text-black text-xl">
            Pong
          </span>
        </div>

        {modalIsOpen && <ProjectsModal closeModal={closeModal} />}
        {githubModalIsOpen && <GitHubModal closeModal={closeGithubModal} />}
        {calcIsOpen && (
          <CalculatorModal closeModal={() => setCalcIsOpen(false)} />
        )}
        {pongIsOpen && <PongModal closeModal={() => setPongIsOpen(false)} />}
      </main>
    </>
  );
}
