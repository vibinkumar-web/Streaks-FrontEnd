import React from 'react';

export default function SectionHeader({ eyebrow, title }) {
    return (
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title">{title}</h2>
        </div>
    );
}
