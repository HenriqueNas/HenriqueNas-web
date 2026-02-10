import Image from 'next/image';
import { Rnd } from 'react-rnd';

import { ReactNode, useRef, useState } from 'react';
import github from '../assets/shortcuts/github.png';

import '../styles/global.css';

const initialSize = {
  height: 500,
  width: 600,
};

const profile = {
  name: 'HenriqueNas',
  bio: 'In love with Flutter, trying to do cool things for people!',
  company: 'Will Bank',
  location: 'Rio do Sul, SC - Brazil',
  blog: 'www.henriquenas.dev',
  publicRepos: 78,
  followers: 72,
  following: 178,
  avatarUrl: 'https://avatars.githubusercontent.com/u/51311423?v=4',
  profileUrl: 'https://github.com/HenriqueNas',
};

const topRepos = [
  {
    name: 'Wed',
    description:
      'Web Dart framework, to works like React and sounds like Flutter.',
    language: 'Dart',
    stars: 40,
    forks: 2,
    url: 'https://github.com/HenriqueNas/Wed',
  },
  {
    name: 'flutter_vanilla',
    description: 'Flutter lib based on Vanilla (Ubuntu) Design System',
    language: 'Dart',
    stars: 3,
    forks: 0,
    url: 'https://github.com/HenriqueNas/flutter_vanilla',
  },
  {
    name: 'brutils-dart',
    description: 'Dart utils library for specific Brazilian businesses',
    language: 'HTML',
    stars: 3,
    forks: 0,
    url: 'https://github.com/HenriqueNas/brutils-dart',
  },
  {
    name: 'tech-threads',
    description: 'Um projeto pra eu estudar juntinho com o Filipe Deschamps',
    language: 'TypeScript',
    stars: 2,
    forks: 0,
    url: 'https://github.com/HenriqueNas/tech-threads',
  },
  {
    name: 'EBI-flutter-clean-arch',
    description:
      'A opined proposal of clean architecture for Flutter applications.',
    language: 'Dart',
    stars: 2,
    forks: 0,
    url: 'https://github.com/HenriqueNas/EBI-flutter-clean-arch',
  },
];

export default function GitHubModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const ref = useRef<Rnd>(null);

  function toggleSize() {
    if (isMaximized) {
      ref.current?.updateSize({
        height: initialSize.height,
        width: initialSize.width,
      });

      ref.current?.updatePosition({
        y: initialSize.height / 3,
        x: initialSize.width / 2,
      });
    } else {
      ref.current?.updateSize({
        height: parent.innerHeight - 22,
        width: parent.innerWidth,
      });

      ref.current?.updatePosition({
        y: 0 + 22,
        x: 0,
      });
    }

    setIsMaximized(!isMaximized);
  }

  return (
    <Rnd
      ref={ref}
      onDragStart={() => setIsDragging(true)}
      onDragStop={() => setIsDragging(false)}
      minHeight={500}
      minWidth={600}
      default={{
        y: initialSize.height / 4,
        x: initialSize.width / 3,
        height: initialSize.height,
        width: initialSize.width,
      }}
      className={`border border-[#262626] ${
        isDragging ? 'cursor-grabbing!' : 'cursor-grab!'
      } !active:cursor-grabbing`}
      bounds="parent"
      resizeHandleClasses={{
        top: '!cursor-rowResize',
        topLeft: '!cursor-nwseResize',
        topRight: '!cursor-neswResize',
        bottom: '!cursor-rowResize',
        bottomLeft: '!cursor-neswResize',
        bottomRight: '!cursor-nwseResize',
        left: '!cursor-colResize',
        right: '!cursor-colResize',
      }}
    >
      <div className="flex h-full flex-col border border-gray-400 bg-[#CCCCCC] p-1">
        {/* Title bar */}
        <div className="flex h-6 flex-row items-center justify-between gap-1 p-1">
          <_Square />
          <_Stripe />
          <div className="mx-1 flex flex-row items-center gap-1">
            <Image src={github} alt="GitHub logo" className="h-5 w-5" />
            <span>GitHub</span>
          </div>
          <_Stripe />
          <_Maximize onClick={toggleSize} />
          <_Close onClick={closeModal} />
        </div>

        {/* Content */}
        <div className="mt-1 flex flex-1 cursor-default! flex-col gap-3 overflow-auto border-2 border-t-[#888] border-r-white border-b-white border-l-[#888] bg-white p-3">
          {/* Profile section */}
          <div className="flex flex-row items-center gap-3">
            <Image
              src={profile.avatarUrl}
              alt="GitHub avatar"
              width={80}
              height={80}
              className="h-20 w-20 border border-[#262626]"
              unoptimized
            />
            <div className="flex flex-col gap-1">
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#0000EE] underline hover:text-[#551A8B]"
              >
                {profile.name}
              </a>
              <span className="text-base text-[#333]">{profile.bio}</span>
              <div className="mt-1 flex flex-row gap-3 text-sm text-[#555]">
                <span>{profile.company}</span>
                <span>{profile.location}</span>
              </div>
              <div className="flex flex-row gap-3 text-sm text-[#555]">
                <span>{profile.publicRepos} repos</span>
                <span>{profile.followers} followers</span>
                <span>{profile.following} following</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#999]" />

          {/* Repos header */}
          <span className="text-base font-bold text-[#333]">
            Top Repositories
          </span>

          {/* Repos list */}
          <div className="flex flex-col gap-2">
            {topRepos.map((repo) => (
              <div
                key={repo.name}
                className="flex flex-col gap-1 border border-[#ccc] bg-[#F5F5F5] p-2"
              >
                <div className="flex flex-row items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#0000EE] underline hover:text-[#551A8B]"
                  >
                    {repo.name}
                  </a>
                  <div className="flex flex-row gap-2 text-sm text-[#555]">
                    <span>&#9733; {repo.stars}</span>
                    <span>&#9906; {repo.forks}</span>
                  </div>
                </div>
                <span className="text-sm text-[#555]">{repo.description}</span>
                {repo.language && (
                  <span className="text-sm text-[#777]">{repo.language}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Rnd>
  );
}

function _Square({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="h-4 w-4 cursor-pointer border border-t-[#262626] border-l-[#262626] bg-linear-to-br from-[#9A9A9A] to-[#F1F1F1]"
    >
      <div className="h-full border border-[#262626]">
        <div className="flex h-full flex-col border border-r-[#262626] border-b-[#262626]">
          {children}
        </div>
      </div>
    </div>
  );
}

function _Maximize({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative -top-0.5 -left-0.5 h-[0.55rem] w-[0.55rem] border-r-2 border-b-2 border-[#262626]" />
    </_Square>
  );
}

function _Close({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative -left-0.5 flex h-4 w-3 flex-col items-center justify-center gap-0.5">
        <div className="h-px w-full bg-[#262626]" />
        <div className="h-px w-full bg-[#262626]" />
      </div>
    </_Square>
  );
}

function _Stripe() {
  return (
    <div className="flex h-4 grow flex-col justify-evenly bg-[#ddd]">
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
      <div className="h-0.5 bg-[#999999]" />
    </div>
  );
}
