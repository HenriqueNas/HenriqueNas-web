'use client';

import CalculatorModal from '@/components/CalculatorModal';
import GitHubModal from '@/components/GitHubModal';
import PongModal from '@/components/PongModal';
import ProjectsModal from '@/components/ProjectsModal';
import Shortcut from '@/components/Shortcut';
import TopBar from '@/components/TopBar';
import { useIsMobile } from '@/hooks/useIsMobile';
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
  const isMobile = useIsMobile();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [githubModalIsOpen, setGithubModalIsOpen] = useState(!isMobile);
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
      {!isMobile && (
        <TopBar
          onOpenCalc={() => setCalcIsOpen(true)}
          onOpenPong={() => setPongIsOpen(true)}
          onOpenGithub={openGithub}
        />
      )}
      <main
        ref={ref}
        className={
          isMobile
            ? 'flex flex-1 flex-col items-center gap-2 overflow-auto p-4'
            : 'relative flex flex-1 flex-col flex-wrap content-start gap-2 overflow-hidden p-4'
        }
      >
        <Shortcut image={github} title="Github" action={openGithub} />
        <Shortcut image={projects} title="Projects" action={openProjects} />
        <Shortcut image={resume} title="Resume" action={openResume} />
        <Shortcut image={linkedin} title="LinkedIn" action={openLinkedIn} />
        <Shortcut image={youtube} title="YouTube" action={openYouTube} />
        <Shortcut image={web} title="Internet" action={openGoogle} />
        <Shortcut image={figma} title="Figma" action={openFigma} />

        {!isMobile && (
          <>
            {/* Calculator desktop icon */}
            <div
              onClick={() => setCalcIsOpen(true)}
              onDoubleClick={() => setCalcIsOpen(true)}
              tabIndex={0}
              className="focus:outline-indigo-grey m-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center bg-transparent hover:brightness-75 hover:filter focus:outline-1 focus:brightness-50 focus:outline-dashed"
            >
              <div className="flex h-10 w-10 items-center justify-center border-[1px] border-t-[#fff] border-r-[#888] border-b-[#888] border-l-[#fff] bg-[#CCCCCC] font-mono text-lg font-bold text-[#333]">
                42
              </div>
              <span className="mt-2 flex items-center justify-center bg-[#FFF]/40 px-2 text-xl text-black">
                Calc
              </span>
            </div>

            {/* Pong desktop icon */}
            <div
              onClick={() => setPongIsOpen(true)}
              onDoubleClick={() => setPongIsOpen(true)}
              tabIndex={0}
              className="focus:outline-indigo-grey m-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center bg-transparent hover:brightness-75 hover:filter focus:outline-1 focus:brightness-50 focus:outline-dashed"
            >
              <div className="flex h-10 w-10 items-center justify-center border-[1px] border-t-[#fff] border-r-[#888] border-b-[#888] border-l-[#fff] bg-[#1a1a2e] font-mono text-xs font-bold text-[#CCCCCC]">
                PONG
              </div>
              <span className="mt-2 flex items-center justify-center bg-[#FFF]/40 px-2 text-xl text-black">
                Pong
              </span>
            </div>

            {modalIsOpen && <ProjectsModal closeModal={closeModal} />}
            {githubModalIsOpen && <GitHubModal closeModal={closeGithubModal} />}
            {calcIsOpen && (
              <CalculatorModal closeModal={() => setCalcIsOpen(false)} />
            )}
            {pongIsOpen && (
              <PongModal closeModal={() => setPongIsOpen(false)} />
            )}
          </>
        )}
      </main>
    </>
  );
}
