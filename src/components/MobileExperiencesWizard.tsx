'use client';

import Image from 'next/image';
import { Rnd } from 'react-rnd';

import { ReactNode, useEffect, useRef, useState } from 'react';

import '../styles/global.css';

import tabBgActive from '../assets/tabs/active.png';
import tabBgSelected from '../assets/tabs/selected.png';

import willBankGeneral1 from '../../images/portfolio/will bank - general/will bank - general 1.png';
import willBankGeneral2 from '../../images/portfolio/will bank - general/will bank - general 2.png';
import willBankGeneral3 from '../../images/portfolio/will bank - general/will bank - general 3.png';
import willBankInsurance1 from '../../images/portfolio/will bank - insurance/will bank - insurance 1.png';
import willBankInsurance2 from '../../images/portfolio/will bank - insurance/will bank - insurance 2.png';
import willBankInsurance3 from '../../images/portfolio/will bank - insurance/will bank - insurance 3.png';
import willBankInsurance4 from '../../images/portfolio/will bank - insurance/will bank - insurance 4.png';

import tfsports1 from '../../images/portfolio/TFSports + Trainer/TFSports 1.png';
import tfsports2 from '../../images/portfolio/TFSports + Trainer/TFSports 2.png';
import tfsports3 from '../../images/portfolio/TFSports + Trainer/TFSports 3.png';
import tfsportsTrainer1 from '../../images/portfolio/TFSports + Trainer/TFSports Trainer 1.png';
import tfsportsTrainer2 from '../../images/portfolio/TFSports + Trainer/TFSports Trainer 2.png';

import magazord1 from '../../images/portfolio/magazord/magazord 1.png';
import magazord2 from '../../images/portfolio/magazord/magazord 2.png';

import effecti1 from '../../images/portfolio/effecti/effecti 1.png';
import effecti2 from '../../images/portfolio/effecti/effecti 2.png';
interface Impact {
  title: string;
  description: string;
}

interface StoreLinks {
  android: string;
  ios: string;
}

interface ExperienceStep {
  id: string;
  label: string;
  role: string;
  focus: string;
  storeLinks?: StoreLinks;
  impacts: Impact[];
  images: any[];
}

const steps: ExperienceStep[] = [
  {
    id: 'will-bank',
    label: 'Will Bank',
    role: 'Senior Software Engineer Fullstack - Mobile Specialist',
    focus:
      'Core fintech products, Server-Driven UI architecture, and data-driven product discovery.',
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=br.com.meupag',
      ios: 'https://apps.apple.com/br/app/banco-will-cart%C3%A3o-de-cr%C3%A9dito/id1209532063',
    },
    impacts: [
      {
        title: 'Architecture & Mobile',
        description:
          'Designed and implemented scalable Flutter architectures for high-performance insurance products (account, card, and mobile insurance), tightly integrated with robust backend services built on Node.js, Temporal, and AWS.',
      },
      {
        title: 'Technical Innovation',
        description:
          'Developed an internal Server-Driven UI (SDUI) framework, enabling dynamic, real-time screen updates and checkout flow adjustments, drastically reducing dependency on frequent App Store and Google Play releases.',
      },
      {
        title: 'Business Growth',
        description:
          'Led data-driven product discovery and rapid prototyping processes, optimizing user touchpoints and contextual placement for insurance offers throughout the app to directly drive engagement and sales conversion.',
      },
      {
        title: 'Force Multiplier',
        description:
          'Implemented AI-SDLC methodologies within the team culture, leveraging LLMs to accelerate legacy code refactoring while maintaining high code-quality standards.',
      },
    ],
    images: [
      willBankGeneral1,
      willBankGeneral2,
      willBankGeneral3,
      willBankInsurance1,
      willBankInsurance2,
      willBankInsurance3,
      willBankInsurance4,
    ],
  },
  {
    id: 'tfsports',
    label: 'Compass UOL',
    role: 'Senior Mobile Specialist',
    focus:
      'Greenfield ecosystem architecture, B2B/B2C mobile solutions, and real-time synchronization.',
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=br.com.tfsports.customer',
      ios: 'https://apps.apple.com/br/app/tfsports/id1251078517',
    },
    impacts: [
      {
        title: 'Greenfield Development',
        description:
          'Structured the scalable foundation and folder patterns in Flutter for both apps in the ecosystem: TFSports (customer-facing scheduling and marketplace app) and TFSports Trainer (a B2B platform for personal trainer empowerment).',
      },
      {
        title: 'Security & Performance',
        description:
          'Established strict data security protocols and corporate performance benchmarks to ensure a fluid, high-performance user interface capable of handling high-impact traffic.',
      },
      {
        title: 'Real-Time Synchronization',
        description:
          'Developed integration layers with RESTful APIs and Firebase, ensuring real-time data synchronization for trainer slot management, digital booking, and event notifications.',
      },
    ],
    images: [
      tfsports1,
      tfsports2,
      tfsports3,
      tfsportsTrainer1,
      tfsportsTrainer2,
    ],
  },
  {
    id: 'magazord',
    label: 'Magazord',
    role: 'Mobile Software Engineer',
    focus:
      'B2B merchant mobility, logistics automation, and real-time operational control.',
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.magazord.admin',
      ios: 'https://apps.apple.com/br/app/magazord/id1613982336',
    },
    impacts: [
      {
        title: 'Merchant Mobility',
        description:
          'Developed the native administrative application that enabled e-commerce merchants to manage operations on the go, eliminating exclusive dependency on desktop environments.',
      },
      {
        title: 'Operational Efficiency',
        description:
          'Implemented critical logistics and inventory tools directly on mobile devices, including stock location management via barcode scanning using the device camera and real-time sales indicator tracking.',
      },
      {
        title: 'Catalog Management',
        description:
          'Built features for active catalog management and order fulfillment, allowing merchants to adjust prices and instantly enable or disable products on the website.',
      },
    ],
    images: [magazord1, magazord2],
  },
  {
    id: 'effecti',
    label: 'Effecti',
    role: 'Fullstack Engineer & UX/UI Designer',
    focus:
      'GovTech SaaS automation, real-time data engines, and product-driven UI/UX design.',
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.effecti.app',
      ios: 'https://apps.apple.com/br/app/effecti/id1565590038',
    },
    impacts: [
      {
        title: 'Mobile & Automation',
        description:
          'Architected and developed a cross-platform mobile solution using Flutter, creating a monitoring and text-capture engine that processed electronic bidding chats and government auctions in real time.',
      },
      {
        title: 'Instant Alert System',
        description:
          'Implemented an instant notification system that alerted bidders immediately when their company’s CNPJ, name, or product was summoned or mentioned by government officials, eliminating an exhaustive manual routine.',
      },
      {
        title: 'Product Vision & UI/UX',
        description:
          'Transitioned into a Product Designer role, applying UX Research techniques to redefine the B2B roadmap, creating high-fidelity prototypes in Figma, and building the company Design System to optimize technical hand-offs to engineering.',
      },
    ],
    images: [effecti1, effecti2],
  },
];

const initialSize = { height: 560, width: 900 };

export default function MobileExperiencesWizard({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef<Rnd>(null);

  const step = steps[activeTab];
  const imageCount = step.images.length;
  const hasImages = imageCount > 0;

  useEffect(() => {
    setImageIndex(0);
  }, [activeTab]);

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
      ref.current?.updatePosition({ y: 22, x: 0 });
    }
    setIsMaximized(!isMaximized);
  }

  function prevImage() {
    setImageIndex((i) => (i > 0 ? i - 1 : imageCount - 1));
  }

  function nextImage() {
    setImageIndex((i) => (i < imageCount - 1 ? i + 1 : 0));
  }

  return (
    <Rnd
      ref={ref}
      onDragStart={() => setIsDragging(true)}
      onDragStop={() => setIsDragging(false)}
      minHeight={560}
      minWidth={900}
      default={{
        y: 120,
        x: 360,
        height: initialSize.height + 60,
        width: initialSize.width + 60,
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
            <span className="text-sm font-bold">Mobile Experiences</span>
          </div>
          <_Stripe />
          <_Maximize onClick={toggleSize} />
          <_Close onClick={closeModal} />
        </div>

        {/* Tab row */}
        <div className="mt-1 flex cursor-default! items-end">
          {steps.map((s, i) => {
            const isSelected = i === activeTab;

            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(i)}
                className="relative top-px cursor-pointer"
                style={{ marginRight: -7, zIndex: isSelected ? 10 : 1 }}
              >
                <Image
                  src={isSelected ? tabBgSelected : tabBgActive}
                  alt={s.label}
                  width={86}
                  height={22}
                  className="h-5.5 w-21.5"
                  unoptimized
                />
                <span
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center pb-px font-sans text-[11px] ${
                    isSelected ? 'font-bold text-[#222]' : 'text-[#444]'
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
          {/* filler strip to complete the tab row */}
          <div className="h-5.5 flex-1 border-b-2 border-[#888] bg-[#CCCCCC]" />
        </div>

        {/* Tab content — two-column layout, full width */}
        <div className="flex flex-1 cursor-default! overflow-hidden border-2 border-t-0 border-r-white border-b-white border-l-[#888] bg-white font-sans">
          {/* Left column: text (60%) */}
          <div className="flex w-3/5 flex-col gap-4 overflow-auto bg-[#eee] p-5 pr-3 text-sm leading-snug text-[#222]">
            <div>
              <span className="block text-xs font-bold tracking-wider text-[#888] uppercase">
                Role
              </span>
              <span>{step.role}</span>
            </div>

            <div>
              <span className="block text-xs font-bold tracking-wider text-[#888] uppercase">
                Focus
              </span>
              <span>{step.focus}</span>
            </div>

            {step.storeLinks && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#888]">
                  Available on:
                </span>
                <a
                  href={step.storeLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border border-t-white border-r-[#888] border-b-[#888] border-l-white bg-[#DDDDDD] px-3 py-0.5 text-xs text-[#333] no-underline active:border-t-[#888] active:border-r-white active:border-b-white active:border-l-[#888]"
                >
                  App Store
                </a>
                <a
                  href={step.storeLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border border-t-white border-r-[#888] border-b-[#888] border-l-white bg-[#DDDDDD] px-3 py-0.5 text-xs text-[#333] no-underline active:border-t-[#888] active:border-r-white active:border-b-white active:border-l-[#888]"
                >
                  Play Store
                </a>
              </div>
            )}

            <div>
              <span className="mb-3 block text-base font-bold text-[#333399]">
                Impact &amp; Achievements
              </span>
              <ul className="flex list-none flex-col gap-4">
                {step.impacts.map((impact) => (
                  <li key={impact.title} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-[#333399] select-none">
                      &#9656;
                    </span>
                    <div>
                      <span className="font-bold text-[#333399]">
                        {impact.title}
                      </span>
                      <span className="text-[#444]">
                        {' '}
                        &mdash; {impact.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: images (40%) */}
          <div className="flex w-2/5 flex-col border-l-2 border-[#ddd] bg-[#FAFAFA] p-4">
            {hasImages ? (
              <>
                <span className="mb-2 block text-xs font-bold tracking-wider text-[#888] uppercase">
                  Screenshots
                </span>
                <div className="flex flex-1 items-center justify-center">
                  <Image
                    src={step.images[imageIndex]}
                    alt={`${step.label} screenshot ${imageIndex + 1}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <button
                    onClick={prevImage}
                    className="cursor-pointer border border-t-white border-r-[#888] border-b-[#888] border-l-white bg-[#DDDDDD] px-3 py-0.5 text-xs text-[#333] active:border-t-[#888] active:border-r-white active:border-b-white active:border-l-[#888]"
                  >
                    &#9664; Prev
                  </button>
                  <span className="text-xs text-[#888]">
                    {imageIndex + 1} / {imageCount}
                  </span>
                  <button
                    onClick={nextImage}
                    className="cursor-pointer border border-t-white border-r-[#888] border-b-[#888] border-l-white bg-[#DDDDDD] px-3 py-0.5 text-xs text-[#333] active:border-t-[#888] active:border-r-white active:border-b-white active:border-l-[#888]"
                  >
                    Next &#9654;
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-xs text-[#888]">
                No screenshots available
              </div>
            )}
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

function _Maximize({ onClick }: { onClick?: () => void }) {
  return (
    <_Square onClick={onClick}>
      <div className="relative -top-0.5 -left-0.5 h-[0.55rem] w-[0.55rem] border-r-2 border-b-2 border-[#262626]" />
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
