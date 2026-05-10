'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const fullName = 'Prakhar Aditya Tripathi';

export default function Home() {
  const [heroText, setHeroText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHeroText(fullName);
      setShowCursor(false);
      return;
    }

    let currentIndex = 0;
    let timerId: number;

    const typeTick = () => {
      setHeroText(fullName.slice(0, currentIndex + 1));
      currentIndex += 1;

      if (currentIndex < fullName.length) {
        timerId = window.setTimeout(typeTick, 20);
      } else {
        setShowCursor(false);
      }
    };

    timerId = window.setTimeout(typeTick, 20);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && navOpen) {
        setNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);
  const navLabel = navOpen ? 'Close menu' : 'Open menu';

  return (
    <main>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.12] blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-15%] h-[24rem] w-[24rem] rounded-full bg-blue-500/[0.08] blur-[90px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="translate-y-1 absolute top-0 left-0 z-50 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6 sm:pt-6">
        <a href="#home" aria-label="Home">
          <span
            className="logo-animate text-4xl leading-none transition-opacity duration-300 hover:opacity-70"
            style={{
              fontFamily: "'Tiro Devanagari Hindi', serif",
              color: 'rgba(255, 255, 255, 0.28)',
              fontWeight: 500,
            }}
          >
            प्र
          </span>
        </a>
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-2 sm:px-6 sm:pt-6 sm:pb-0">

        <div className="relative flex items-start justify-end">
          <input
            type="checkbox"
            id="nav-toggle"
            className="peer sr-only"
            checked={navOpen}
            onChange={(event) => setNavOpen(event.target.checked)}
          />

          <label
            htmlFor="nav-toggle"
            id="nav-menu-label"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 shadow-sm transition-all hover:border-white/15 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:hidden"
            aria-controls="site-nav"
            aria-label={navLabel}
            aria-expanded={navOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </label>

          <label
            htmlFor="nav-toggle"
            className="fixed inset-0 z-40 bg-black/60 opacity-0 pointer-events-none backdrop-blur-sm transition-opacity duration-200 peer-checked:opacity-100 peer-checked:pointer-events-auto md:hidden"
            aria-hidden="true"
          ></label>

          <nav
            id="site-nav"
            className="absolute right-0 top-full z-50 mt-2 hidden min-w-[12rem] flex-col gap-0.5 rounded-xl border border-white/10 bg-white/[0.08] p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl peer-checked:flex md:static md:mt-0 md:flex md:min-w-0 md:flex-row md:gap-1 md:rounded-xl md:border md:border-white/10 md:bg-white/[0.06] md:p-2 md:shadow-lg md:shadow-black/30 md:backdrop-blur-xl lg:gap-2"
            aria-label="Primary"
          >
            {['home', 'skills', 'timeline', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={closeNav}
                className="nav-link rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/[0.08] hover:text-white md:py-1.5"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative mx-auto max-w-6xl px-5 pt-20 pb-6 sm:px-8 sm:pt-24 sm:pb-8 md:px-12 md:pt-28 md:pb-10"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[min(22rem,55vw)] w-[min(22rem,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.14] blur-[64px]"
          aria-hidden="true"
        ></div>
        <div
          className="pointer-events-none absolute left-1/2 top-[55%] h-32 w-48 -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[48px]"
          aria-hidden="true"
        ></div>

        <div className="relative flex flex-col items-center gap-7 md:flex-row-reverse md:items-center md:gap-3">
          <div className="w-full max-w-[15rem] md:max-w-none md:w-[28%] md:self-center md:pr-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 ring-1 ring-white/15 ring-offset-2 ring-offset-transparent backdrop-blur-sm"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(96,165,250,0.06) 100%)', boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 0 32px rgba(96,165,250,0.15), 0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <Image
                src="/profile.webp"
                alt="Prakhar Aditya Tripathi"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-[68%] flex flex-col justify-center">
            <p className="text-[15px] font-normal tracking-[0.12em] text-zinc-400 sm:text-[1.2rem]">Hi, I’m</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              aria-label="Prakhar Aditya Tripathi"
            >
              <span
                id="hero-typed-name"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {heroText}
              </span>
              <span
                id="hero-typed-cursor"
                className={`ml-1 inline-block h-[0.9em] w-0.5 bg-blue-400 transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                aria-hidden="true"
              />
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed text-center md:text-left">
              I build tools that simplify things.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:gap-2.5 items-center justify-center md:justify-start">
              <a
                href="https://github.com/codyandersan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.07] px-4 py-2.5 text-sm font-medium text-blue-300 shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-blue-400/35 hover:bg-blue-500/15 hover:text-blue-200"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-blue-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58V22" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prakhartri/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.07] px-4 py-2.5 text-sm font-medium text-blue-300 shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-blue-400/35 hover:bg-blue-500/15 hover:text-blue-200"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-blue-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <p className="mt-4 text-xs font-medium tracking-wide text-zinc-500">
              Student • Lucknow, India
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-20 border-t border-white/5 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-11 lg:px-16 lg:py-12"
      >
        <div className="mx-auto max-w-4xl">
          <header className="border-b border-white/10 pb-4 md:pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Skills</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">What I work with</h2>
          </header>
          <div className="mt-5 grid grid-cols-1 gap-3 md:mt-6 md:grid-cols-2 md:gap-4 lg:gap-5">
            {[
              {
                title: 'Python (Automation & Scripting)',
                bullets: [
                  'Built automation scripts using Selenium & PyAutoGUI',
                  'Data scraping using BeautifulSoup & Requests',
                  'Simple GUI tools (Tkinter / PyQt)',
                ],
                dot: 'bg-blue-500',
              },
              {
                title: 'Web Development',
                bullets: [
                  'Frontend: React, Tailwind CSS',
                  'Backend: Node.js, Express',
                  'Built full-stack apps & APIs',
                ],
                dot: 'bg-blue-400',
              },
              {
                title: 'Databases',
                bullets: ['MongoDB', 'Data modeling', 'Schema Design'],
                dot: 'bg-blue-300',
              },
              {
                title: 'Tools & Systems',
                bullets: ['Linux', 'Bash scripting', 'Git & version control'],
                dot: 'bg-cyan-400',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20 backdrop-blur-xl transition-colors hover:border-white/15 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${card.dot}`} aria-hidden="true"></span>
                  <h3 className="text-base font-bold text-white">{card.title}</h3>
                </div>
                <ul className="mt-2.5 space-y-1.8 text-sm leading-relaxed text-zinc-400">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-blue-400">−</span> <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="scroll-mt-20 border-t border-white/5 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-11 lg:px-16 lg:py-12"
      >
        <div className="mx-auto max-w-4xl">
          <header className="border-b border-white/10 pb-4 md:pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Timeline</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Experience & milestones</h2>
          </header>

          <div className="relative mt-5 md:mt-6">
            <div
              className="pointer-events-none absolute top-[1rem] bottom-[1rem] w-0.5 bg-blue-600 left-[6.875rem] sm:left-[9.375rem] -translate-x-1/2 sm:top-[1.25rem] sm:bottom-[1.25rem]"
              aria-hidden="true"
            ></div>
            <ul className="space-y-6 sm:space-y-8">
              {[
                {
                  date: 'Apr 2026',
                  title: 'Class 12 at Rani Laxmi Bai Memorial School',
                  details: 'Currently in Grade 12 pursuing academics alongside personal projects and learning.',
                  dateColor: 'text-green-400',
                  markerColor: 'bg-green-500 ring-[3px] ring-zinc-950 shadow-[0_0_12px_rgba(34,197,94,0.6)]',
                },
                {
                  date: 'Nov 2025',
                  title: 'AirPiano',
                  link: 'https://github.com/codyandersan/AirPiano',
                  details:
                    'Gesture-controlled virtual piano allowing users to play a piano in mid-air using hand and finger movements without touching any physical keys.',
                },
                {
                  date: 'Mar 2025',
                  title: 'Class 10 ICSE Boards',
                  details: 'Completed Class 10 with an overall score of 98.6%.',
                },
                {
                  date: '2023–2025',
                  title: 'Studied Java academically',
                  details: 'Core Java and OOP through school coursework and practice.',
                },
                {
                  date: 'Jun 2024',
                  title: 'MetaEdit',
                  link: 'https://github.com/codyandersan/MetaEdit',
                  details:
                    'Editing and metadata workflow tool that adds metadata, lyrics, and more to downloaded music files.',
                },
                {
                  date: 'Jan 2024',
                  title: 'Quote API',
                  link: 'https://github.com/codyandersan/QuoteAPI',
                  details:
                    'REST API that generates and sends users an image with a quote on it, edited via Pillow, delivered straight to their email.',
                },
                {
                  date: 'Oct 2023',
                  title: 'TuneStation 2.0',
                  link: 'https://alphastation.vercel.app',
                  details: 'Major TuneStation refresh, new features and switched to ReactJS vs. 1.0.',
                },
                {
                  date: 'Jun 2023',
                  title: 'YTLoader',
                  link: 'https://github.com/codyandersan/YTLoader-Backend',
                  details: 'YouTube video/audio download utility built in ReactJS Work in progress, not shipped.',
                  suffix: ' (unfinished)',
                },
                {
                  date: 'Feb 2023',
                  title: 'Learned ReactJS',
                  details: 'Moved to component-based UI with React—components, state, and built simple projects.',
                },
                {
                  date: 'Dec 2022',
                  title: 'TuneStation 1.0',
                  link: 'https://tunestation.vercel.app',
                  details: 'Ad-free high quality music player and downloader.',
                },
                {
                  date: 'Jan 2022',
                  title: 'Arthur AI',
                  link: 'https://github.com/codyandersan/Arthur_AI',
                  details: 'PC-based virtual assistant with tons of features.',
                },
                {
                  date: '2008',
                  title: 'Born',
                  details: 'Beginning of life.',
                  largeBottomMargin: true,
                },
              ].map((item) => (
                <li key={item.date + item.title} className={`relative flex gap-4 sm:gap-8${item.largeBottomMargin ? ' mt-16 sm:mt-24' : ''}`}>
                  <div
                    className={`w-24 shrink-0 pt-1 text-right text-[11px] font-bold leading-snug text-zinc-500 sm:w-32 sm:pt-1.5 sm:text-sm sm:leading-snug${item.dateColor ? ` ${item.dateColor}` : ''}`}
                  >
                    {item.date}
                  </div>
                  <div className="relative flex-1 pl-6 pb-2 sm:pl-10">
                    <span
                      className={`absolute -left-[0.5625rem] top-[0.625rem] z-10 h-3 w-3 rounded-full ${item.markerColor ?? 'bg-blue-500'} ring-[3px] ring-zinc-950 sm:-left-[1.0625rem] sm:top-[0.875rem] sm:translate-x-[17px] `}
                      aria-hidden="true"
                    ></span>
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-white transition-colors hover:text-blue-200"
                        >
                          <span className="underline decoration-wavy decoration-transparent underline-offset-[5px] transition-all duration-300 group-hover:decoration-blue-400">
                            {item.title}
                          </span>
                          <svg
                            className="h-4 w-4 text-blue-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      ) : (
                        item.title
                      )}
                      {item.suffix ? <span className="font-normal text-zinc-500 ml-1.5">{item.suffix}</span> : null}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{item.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/5 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-11 lg:px-16 lg:py-12"
      >
        <div className="mx-auto max-w-4xl">
          <header className="border-b border-white/10 pb-4 md:pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Contact</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Let’s connect</h2>
          </header>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
            Reach out for collaborations, questions, or just to say hello.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 md:grid-cols-4 md:gap-4">
            {[
              {
                href: 'https://github.com/codyandersan',
                label: 'GitHub',
                iconClass: '',
                paths: [
                  {
                    d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58V22',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: 1.65,
                  },
                ],
              },
              {
                href: 'mailto:me@prakhartri.me',
                label: 'Email',
                iconClass: 'text-blue-400/90',
                paths: [
                  { d: 'M4 6h16v12H4V6z', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 },
                  { d: 'M4 8l8 5 8-5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 },
                ],
              },
              {
                href: 'https://www.linkedin.com/in/prakhartri/',
                label: 'LinkedIn',
                iconClass: 'text-[#0A66C2]',
                paths: [
                  {
                    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
                    fill: 'currentColor',
                    stroke: 'none',
                    strokeWidth: 0,
                  },
                ],
              },
              {
                href: 'https://t.me/codyandersan',
                label: 'Telegram',
                iconClass: 'text-sky-400',
                paths: [
                  { d: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', fill: 'none', stroke: 'currentColor', strokeWidth: 1.65 },
                ],
              },
            ].map((item) => (
              <li className="min-w-0" key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn flex min-h-[2.85rem] w-full items-center justify-center gap-2 rounded-xl border border-blue-500/45 bg-white/[0.06] px-2.5 py-2.5 text-sm font-semibold text-zinc-200 shadow-lg shadow-black/20 backdrop-blur-xl transition-colors hover:border-blue-400/55 hover:bg-[#5865F2]/10 hover:text-white sm:min-h-0 sm:gap-2.5 sm:py-3"
                >
                  <svg className={`h-5 w-5 shrink-0 ${item.iconClass}`} viewBox="0 0 24 24" aria-hidden="true">
                    {item.paths.map((path, index) => (
                      <path
                        key={index}
                        d={path.d}
                        fill={path.fill}
                        stroke={path.stroke}
                        strokeWidth={path.strokeWidth ?? undefined}
                      />
                    ))}
                  </svg>
                  <span className="truncate">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-white/[0.02] px-5 py-7 text-center text-xs text-zinc-500 backdrop-blur-md sm:px-8 sm:py-8">
        Built with ❤️ by Prakhar Aditya Tripathi
      </footer>
    </main>
  );
}