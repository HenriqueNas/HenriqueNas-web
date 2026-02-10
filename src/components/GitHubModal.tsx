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
      className={`border-[1px] border-[#262626] ${
        isDragging ? '!cursor-grabbing' : '!cursor-grab'
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
      <div
        className="
        bg-[#CCCCCC]
        h-full
        border-[1px] border-gray-400
        p-1
        flex flex-col
      "
      >
        {/* Title bar */}
        <div
          className="
          h-6 p-1
          flex flex-row gap-1
          items-center justify-between
        "
        >
          <_Square />
          <_Stripe />
          <div className="flex flex-row gap-1 items-center mx-1">
            <Image src={github} alt="GitHub logo" className="h-5 w-5" />
            <span>GitHub</span>
          </div>
          <_Stripe />
          <_Maximize onClick={toggleSize} />
          <_Close onClick={closeModal} />
        </div>

        {/* Content */}
        <div className="flex-1 bg-white border-[2px] border-t-[#888] border-l-[#888] border-b-[#fff] border-r-[#fff] mt-1 overflow-auto p-3 flex flex-col gap-3 !cursor-default">
          {/* Profile section */}
          <div className="flex flex-row gap-3 items-center">
            <img
              src={profile.avatarUrl}
              alt="GitHub avatar"
              className="h-20 w-20 border-[1px] border-[#262626]"
            />
            <div className="flex flex-col gap-1">
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0000EE] underline text-lg hover:text-[#551A8B]"
              >
                {profile.name}
              </a>
              <span className="text-base text-[#333]">{profile.bio}</span>
              <div className="flex flex-row gap-3 text-sm text-[#555] mt-1">
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

          <div className="h-[1px] bg-[#999]" />

          {/* Repos header */}
          <span className="font-bold text-base text-[#333]">
            Top Repositories
          </span>

          {/* Repos list */}
          <div className="flex flex-col gap-2">
            {topRepos.map((repo) => (
              <div
                key={repo.name}
                className="border-[1px] border-[#ccc] bg-[#F5F5F5] p-2 flex flex-col gap-1"
              >
                <div className="flex flex-row items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0000EE] underline text-base hover:text-[#551A8B]"
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
      className="h-4 w-4 border-[1px] border-t-[#262626] border-l-[#262626] bg-gradient-to-br from-[#9A9A9A] to-[#F1F1F1] cursor-pointer"
    >
      <div className="border-[1px] border-[#262626] h-full">
        <div className="border-[1px] border-b-[#262626] border-r-[#262626] h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

function _Maximize({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div
        className="
        relative top-[-2px] left-[-2px]
        h-[0.55rem] w-[0.55rem] border-b-[2px] border-r-[2px] border-[#262626]
      "
      />
    </_Square>
  );
}

function _Close({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative left-[-2px] h-4 w-3 flex flex-col items-center justify-center gap-[2px]">
        <div className="h-[1px] bg-[#262626] w-full" />
        <div className="h-[1px] bg-[#262626] w-full" />
      </div>
    </_Square>
  );
}

function _Stripe() {
  return (
    <div className="flex-grow h-4 bg-[#ddd] flex flex-col justify-evenly">
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
      <div className="h-[2px] bg-[#999999]" />
    </div>
  );
}
