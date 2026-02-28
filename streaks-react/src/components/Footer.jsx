import React, { useState } from 'react';

const QUICK = ['Leather Boots', 'Sneakers', 'Sports Shoes', 'Hoodies', 'Hats'];

const SOCIAL = [
    {
        label: 'Instagram',
        d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
        label: 'X / Twitter',
        d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 5.858zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
    {
        label: 'Facebook',
        d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    return (
        <footer id="contact" className="footer-root">
            {/* 4-column grid */}
            <div style={{
                maxWidth: 1160, margin: '0 auto',
                padding: '5rem clamp(1.5rem, 5vw, 4rem) 4rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
            }}>

                {/* ① Brand */}
                <div>
                    <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.4rem', fontWeight: 900,
                        letterSpacing: '0.12em', color: '#fff',
                        marginBottom: '1rem',
                    }}>STREAKS</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                        Premium streetwear for those who move with purpose. Crafted to last, designed to impress.
                    </p>
                    <div style={{ display: 'flex', gap: 10 }}>
                        {SOCIAL.map(s => (
                            <a key={s.label} href="#" aria-label={s.label} className="footer-social">
                                <svg viewBox="0 0 24 24"><path d={s.d} /></svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* ② Quick links */}
                <div>
                    <p className="footer-col-title">Shop</p>
                    {QUICK.map(item => (
                        <a key={item} href="#" className="footer-link">{item}</a>
                    ))}
                </div>

                {/* ③ Contact */}
                <div>
                    <p className="footer-col-title">Contact</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Email</p>
                            <a href="mailto:streaxedshoes022@gmail.com" className="footer-link" style={{ fontSize: '0.78rem' }}>
                                streaxedshoes022@gmail.com
                            </a>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Phone</p>
                            <a href="tel:+6524083100882" className="footer-link" style={{ fontSize: '0.78rem' }}>
                                +652 408 310 0882
                            </a>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Address</p>
                            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                                123 Streaks Avenue<br />Fashion District, NY
                            </p>
                        </div>
                    </div>
                </div>

                {/* ④ Newsletter */}
                <div>
                    <p className="footer-col-title">Newsletter</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                        Early access to drops, exclusive offers — delivered to your inbox.
                    </p>
                    {done ? (
                        <div style={{
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '1rem', textAlign: 'center',
                        }}>
                            <p style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>✓ You're in.</p>
                            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>Thanks for joining.</p>
                        </div>
                    ) : (
                        <form onSubmit={e => { e.preventDefault(); if (email.trim()) setDone(true); }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <input
                                type="email" required value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    color: '#fff', padding: '11px 14px',
                                    fontSize: '0.8rem', outline: 'none',
                                    transition: 'border-color 0.2s',
                                }}
                                onFocus={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                            />
                            <button type="submit" style={{
                                background: '#fff', color: '#0a0a0a',
                                border: 'none', padding: '11px',
                                fontSize: '0.68rem', fontWeight: 700,
                                letterSpacing: '0.2em', textTransform: 'uppercase',
                                cursor: 'pointer', transition: 'background 0.25s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = '#e8e8e8'}
                                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
                maxWidth: 1160, margin: '0 auto',
                display: 'flex', flexWrap: 'wrap',
                alignItems: 'center', justifyContent: 'space-between', gap: 12,
            }}>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
                    © {new Date().getFullYear()} STREAKS. All rights reserved.
                </p>
                <div style={{ display: 'flex', gap: 24 }}>
                    {['Privacy', 'Terms', 'Returns'].map(t => (
                        <a key={t} href="#" style={{
                            fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)',
                            textDecoration: 'none', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
                        >{t}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
