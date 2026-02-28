import React from 'react';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

const PRODUCTS = [
    {
        id: 'boots',
        imgSrc: '/boots.jpg',
        title: 'Leather Boots',
        description: 'Handcrafted premium leather boots built for durability and timeless style. Resoleable construction so they last for years.',
        price: '$129',
        badge: 'Best Seller',
    },
    {
        id: 'sneaker',
        imgSrc: '/sneaker.jpg',
        title: 'Sneakers',
        description: 'Lightweight, breathable sneakers engineered for all-day comfort. Foam midsole with a grippy rubber outsole.',
        price: '$89',
        badge: 'New',
    },
    {
        id: 'sports',
        imgSrc: '/sports.jpg',
        title: 'Sports Shoes',
        description: 'High-performance sports shoes with superior lateral support and cushioning — built for the athlete in you.',
        price: '$109',
        badge: null,
    },
];

export default function BootsSection() {
    return (
        <section style={{ background: '#fff', padding: '6rem clamp(1.5rem, 5vw, 4rem)' }}>
            <div style={{ maxWidth: 1160, margin: '0 auto' }}>
                <SectionHeader eyebrow="Footwear" title="Step Into Style" />
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
