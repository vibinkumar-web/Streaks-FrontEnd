import React, { useState, useEffect } from 'react';

const LINKS = [
    { label: 'Footwear', href: '#boots' },
    { label: 'Hoodies', href: '#hood1' },
    { label: 'Hats', href: '#cap1' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <header
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                transition: 'background 0.4s, padding 0.4s',
                background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                padding: scrolled ? '14px 0' : '22px 0',
            }}
        >
            <div style={{
                maxWidth: 1200, margin: '0 auto',
                padding: '0 32px',
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                gap: 24,
            }}>

                {/* Left — brand */}
                <a href="#hero" style={{
                    color: '#fff',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    textDecoration: 'none',
                    justifySelf: 'start',
                }}>
                    STREAKS
                </a>

                {/* Centre — links */}
                <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}
                    className="hidden-mobile">
                    {LINKS.map(l => (
                        <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
                    ))}
                </nav>

                {/* Right — CTA */}
                <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 16 }}>
                    <a href="#boots"
                        style={{
                            fontSize: '0.68rem', fontWeight: 700,
                            letterSpacing: '0.2em', textTransform: 'uppercase',
                            color: '#fff', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.55)',
                            padding: '9px 22px',
                            transition: 'background 0.25s, color 0.25s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a0a0a'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                        className="hidden-mobile"
                    >
                        Shop Now
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        onClick={() => setOpen(o => !o)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
                        className="show-mobile"
                        aria-label="Menu"
                    >
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                            <rect y="0" width="22" height="1.5" fill="white"
                                style={{ transform: open ? 'translateY(7.25px) rotate(45deg)' : 'none', transformOrigin: 'center', transition: '0.3s' }} />
                            <rect y="7" width="22" height="1.5" fill="white"
                                style={{ opacity: open ? 0 : 1, transition: '0.3s' }} />
                            <rect y="14" width="22" height="1.5" fill="white"
                                style={{ transform: open ? 'translateY(-7.25px) rotate(-45deg)' : 'none', transformOrigin: 'center', transition: '0.3s' }} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div style={{
                overflow: 'hidden',
                maxHeight: open ? 280 : 0,
                transition: 'max-height 0.4s ease',
                background: 'rgba(10,10,10,0.97)',
                borderTop: open ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
                <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, padding: '36px 0' }}>
                    {LINKS.map(l => (
                        <a key={l.label} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#boots"
                        style={{
                            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em',
                            textTransform: 'uppercase', color: '#fff', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.5)', padding: '10px 28px',
                        }}
                        onClick={() => setOpen(false)}
                    >
                        Shop Now
                    </a>
                </nav>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </header>
    );
}
