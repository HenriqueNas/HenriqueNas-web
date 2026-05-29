'use client';

import CalculatorModal from '@/components/CalculatorModal';
import GitHubModal from '@/components/GitHubModal';
import MobileExperiencesWizard from '@/components/MobileExperiencesWizard';
import PongModal from '@/components/PongModal';
import Shortcut from '@/components/Shortcut';
import TopBar from '@/components/TopBar';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useRef, useState } from 'react';

import calcIcon from '../assets/icons/Applications/Calculator.png';
import pongIcon from '../assets/icons/Applications/Key caps.png';
import mobileIcon from '../assets/icons/Applications/Scrapbook.png';
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
  const [githubModalIsOpen, setGithubModalIsOpen] = useState(false);
  const [calcIsOpen, setCalcIsOpen] = useState(false);
  const [pongIsOpen, setPongIsOpen] = useState(false);
  const [wizardIsOpen, setWizardIsOpen] = useState(!isMobile);

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
          onOpenWizard={() => setWizardIsOpen(true)}
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
        <Shortcut image={resume} title="Resume" action={openResume} />
        <Shortcut image={linkedin} title="LinkedIn" action={openLinkedIn} />
        <Shortcut image={youtube} title="YouTube" action={openYouTube} />
        <Shortcut image={web} title="Internet" action={openGoogle} />
        <Shortcut image={figma} title="Figma" action={openFigma} />

        {!isMobile && (
          <>
            <Shortcut
              image={calcIcon}
              title="Calc"
              action={() => setCalcIsOpen(true)}
            />
            <Shortcut
              image={pongIcon}
              title="Pong"
              action={() => setPongIsOpen(true)}
            />
            <Shortcut
              image={mobileIcon}
              title="Mobile XP"
              action={() => setWizardIsOpen(true)}
            />

            {githubModalIsOpen && <GitHubModal closeModal={closeGithubModal} />}
            {calcIsOpen && (
              <CalculatorModal closeModal={() => setCalcIsOpen(false)} />
            )}
            {pongIsOpen && (
              <PongModal closeModal={() => setPongIsOpen(false)} />
            )}
            {wizardIsOpen && (
              <MobileExperiencesWizard
                closeModal={() => setWizardIsOpen(false)}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
