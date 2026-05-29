import Image from 'next/image';

import willBankGeneral1 from '../../../images/portfolio/will bank - general/will bank - general 1.png';
import willBankGeneral2 from '../../../images/portfolio/will bank - general/will bank - general 2.png';
import willBankGeneral3 from '../../../images/portfolio/will bank - general/will bank - general 3.png';
import willBankInsurance1 from '../../../images/portfolio/will bank - insurance/will bank - insurance 1.png';
import willBankInsurance2 from '../../../images/portfolio/will bank - insurance/will bank - insurance 2.png';
import willBankInsurance3 from '../../../images/portfolio/will bank - insurance/will bank - insurance 3.png';
import willBankInsurance4 from '../../../images/portfolio/will bank - insurance/will bank - insurance 4.png';

import tfsports1 from '../../../images/portfolio/TFSports + Trainer/TFSports 1.png';
import tfsports2 from '../../../images/portfolio/TFSports + Trainer/TFSports 2.png';
import tfsports3 from '../../../images/portfolio/TFSports + Trainer/TFSports 3.png';
import tfsportsTrainer1 from '../../../images/portfolio/TFSports + Trainer/TFSports Trainer 1.png';
import tfsportsTrainer2 from '../../../images/portfolio/TFSports + Trainer/TFSports Trainer 2.png';

import magazord1 from '../../../images/portfolio/magazord/magazord 1.png';
import magazord2 from '../../../images/portfolio/magazord/magazord 2.png';

import effecti1 from '../../../images/portfolio/effecti/effecti 1.png';
import effecti2 from '../../../images/portfolio/effecti/effecti 2.png';

interface Impact {
  title: string;
  description: string;
}

interface StoreLinks {
  android: string;
  ios: string;
}

interface Project {
  id: string;
  label: string;
  role: string;
  focus: string;
  storeLinks?: StoreLinks;
  impacts: Impact[];
  images: { src?: any; alt?: string }[];
}

const projects: Project[] = [
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
      {
        src: willBankGeneral1,
        alt: 'Will Bank - General screenshot 1',
      },
      {
        src: willBankGeneral2,
        alt: 'Will Bank - General screenshot 2',
      },
      {
        src: willBankGeneral3,
        alt: 'Will Bank - General screenshot 3',
      },
      {},
      {
        src: willBankInsurance1,
        alt: 'Will Bank - Insurance screenshot 1',
      },
      {
        src: willBankInsurance2,
        alt: 'Will Bank - Insurance screenshot 2',
      },
      {
        src: willBankInsurance3,
        alt: 'Will Bank - Insurance screenshot 3',
      },
      {
        src: willBankInsurance4,
        alt: 'Will Bank - Insurance screenshot 4',
      },
      {},
    ],
  },
  {
    id: 'tfsports',
    label: 'Compass UOL',
    role: 'Senior Mobile Specialist',
    focus:
      'Greenfield ecosystem architecture, B2B/B2C mobile solutions, and real-time synchronization.',
    storeLinks: {
      android:
        'https://play.google.com/store/apps/details?id=br.com.tfsports.customer',
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
      { src: tfsports1, alt: 'TFSports screenshot 1' },
      { src: tfsports2, alt: 'TFSports screenshot 2' },
      { src: tfsports3, alt: 'TFSports screenshot 3' },
      { src: tfsportsTrainer1, alt: 'TFSports Trainer screenshot 1' },
      { src: tfsportsTrainer2, alt: 'TFSports Trainer screenshot 2' },
      {},
    ],
  },
  {
    id: 'magazord',
    label: 'Magazord',
    role: 'Mobile Software Engineer',
    focus:
      'B2B merchant mobility, logistics automation, and real-time operational control.',
    storeLinks: {
      android:
        'https://play.google.com/store/apps/details?id=com.magazord.admin',
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
    images: [
      { src: magazord1, alt: 'Magazord screenshot 1' },
      { src: magazord2, alt: 'Magazord screenshot 2' },
    ],
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
          'Implemented an instant notification system that alerted bidders immediately when their company\u2019s CNPJ, name, or product was summoned or mentioned by government officials, eliminating an exhaustive manual routine.',
      },
      {
        title: 'Product Vision & UI/UX',
        description:
          'Transitioned into a Product Designer role, applying UX Research techniques to redefine the B2B roadmap, creating high-fidelity prototypes in Figma, and building the company Design System to optimize technical hand-offs to engineering.',
      },
    ],
    images: [
      { src: effecti1, alt: 'Effecti screenshot 1' },
      { src: effecti2, alt: 'Effecti screenshot 2' },
    ],
  },
];

export default function PortfolioDocPage() {
  return (
    <div className="min-h-screen cursor-auto overflow-x-clip overflow-y-auto bg-white font-sans text-gray-900 antialiased">
      <div className="mx-auto max-w-4xl px-8 py-12">
        <h1 className="mb-4 text-3xl font-bold">Mobile Portfolio</h1>
        <p className="mb-12 text-gray-600">
          A structured overview of mobile applications I have built and shipped.
        </p>

        {projects.map((project, idx) => (
          <section key={project.id}>
            {idx > 0 && <hr className="my-12 border-gray-300" />}

            <h2 className="mb-6 text-2xl font-bold">{project.label}</h2>

            <div className="mb-4">
              <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Role
              </span>
              <p className="text-gray-800">{project.role}</p>
            </div>

            <div className="mb-6">
              <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Focus
              </span>
              <p className="text-gray-800">{project.focus}</p>
            </div>

            {project.storeLinks && (
              <div className="mb-6">
                <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  Store Links
                </span>
                <p>
                  <a
                    href={project.storeLinks.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    App Store
                  </a>
                  {' \u00B7 '}
                  <a
                    href={project.storeLinks.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Play Store
                  </a>
                </p>
              </div>
            )}

            <div className="mb-8">
              <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Impact &amp; Achievements
              </span>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                {project.impacts.map((impact) => (
                  <li key={impact.title} className="text-gray-800">
                    <strong>{impact.title}</strong> — {impact.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Screenshots
              </span>
              <div className="mt-3 w-[calc(100%+max(0px,(100vw-56rem)/2+2rem))] max-w-none overflow-x-auto pb-2">
                <div className="flex gap-4">
                  {project.images.map((img, i) => {
                    if (!img.src || !img.alt) {
                      return <div key={i} className="w-20 shrink-0" />;
                    }
                    return (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className="h-auto w-64 shrink-0"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
