import React from 'react';

export default function Hero() {
    return (
        <section id="hero" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>

            {/* BG image with zoom animation */}
            <div className="hero-bg anim-hero-zoom"
                style={{ position: 'absolute', inset: 0 }}
            />

            {/* Overlay: dark at bottom for text, lighter at top */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%)',
            }} />

            {/* Content — sits at the bottom-left */}
            <div className="anim-rise" style={{
                position: 'absolute',
                bottom: 80, left: 0, right: 0,
                padding: '0 clamp(2rem, 6vw, 7rem)',
                maxWidth: 700,
            }}>
                <p style={{
                    fontSize: '0.68rem', fontWeight: 600,
                    letterSpacing: '0.35em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)', marginBottom: 16,
                }}>
                    Limited Time Offer
                </p>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                    lineHeight: 0.96,
                    color: '#fff',
                    letterSpacing: '-0.03em',
                    marginBottom: 24,
                }}>
                    50% OFF<br />EVERYTHING
                </h1>

                <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    marginBottom: 36,
                    maxWidth: 380,
                }}>
                    Premium boots, hoodies &amp; hats crafted for those who wear their identity.
                </p>

                <a href="#boots" className="banner-btn">
                    Shop the Collection
                </a>
            </div>

            {/* Scroll indicator — centre-bottom */}
            <div className="anim-scroll" style={{
                position: 'absolute',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
            }}>
                <span style={{
                    fontSize: '0.58rem', letterSpacing: '0.35em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                }}>Scroll</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7l6 6 6-6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    );
}
