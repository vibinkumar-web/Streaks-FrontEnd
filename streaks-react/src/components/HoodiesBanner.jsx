import React from 'react';

export default function HoodiesBanner() {
    return (
        <section className="hood-bg" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <div className="banner-overlay-r" style={{ position: 'absolute', inset: 0 }} />

            <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'flex-end', justifyContent: 'center',
                padding: '0 clamp(2rem, 6vw, 7rem)',
                textAlign: 'right',
            }}>
                <span className="banner-sub" style={{ marginBottom: 20 }}>New Collection</span>
                <h2 className="banner-title" style={{ fontSize: 'clamp(4rem, 11vw, 9.5rem)', marginBottom: 24 }}>
                    HOODIES
                </h2>
                <p style={{
                    fontSize: '0.82rem', fontWeight: 400,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: 36,
                }}>Heavy-Weight Blend</p>
                <a href="#hood1" className="banner-btn">Explore</a>
            </div>
        </section>
    );
}
