import React from 'react';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

const PRODUCTS = [
    {
        id: 'cap1',
        imgSrc: '/cap1.jpeg',
        title: 'Trucker',
        description: 'Classic all-black trucker cap with structured mesh back panels. Six-panel design with adjustable snapback closure.',
        price: '$34',
        badge: 'Classic',
    },
    {
        id: 'cap2',
        imgSrc: '/cap2.jpeg',
        title: 'Mild Tone',
        description: 'Understated tonal cap that pairs effortlessly with any look. Unstructured low-profile crown with a curved brim.',
        price: '$39',
        badge: null,
    },
    {
        id: 'cap3',
        imgSrc: '/cap3.jpeg',
        title: 'Flight',
        description: 'Aviation-inspired with bold embroidered logo. Premium cotton twill construction — rigid and long-lasting.',
        price: '$44',
        badge: 'Hot',
    },
];

export default function HatsSection() {
    return (
        <section style={{ background: '#fff', padding: '6rem clamp(1.5rem, 5vw, 4rem)' }}>
            <div style={{ maxWidth: 1160, margin: '0 auto' }}>
                <SectionHeader eyebrow="Headwear" title="Hats Collection" />
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.75rem',
                }}>
                    {PRODUCTS.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </div>
        </section>
    );
}
