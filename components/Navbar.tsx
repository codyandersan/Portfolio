'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

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
    <>
      <div className="translate-y-1 absolute top-0 left-0 z-50 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6 sm:pt-6 pointer-events-auto">
        <Link href="/#home" aria-label="Home">
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
        </Link>
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-2 sm:px-6 sm:pt-6 sm:pb-0 pointer-events-none">
        <div className="relative flex items-start justify-end pointer-events-auto">
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
            {[
              { label: 'Home', href: '/#home' },
              { label: 'Blog', href: '/blog' },
              { label: 'Skills', href: '/#skills' },
              { label: 'Timeline', href: '/#timeline' },
              { label: 'Contact', href: '/#contact' },
            ].map((section) => (
              <Link
                key={section.label}
                href={section.href}
                onClick={closeNav}
                className="nav-link rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/[0.08] hover:text-white md:py-1.5"
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
