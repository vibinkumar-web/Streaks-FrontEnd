import React from 'react';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

const PRODUCTS = [
    {
        id: 'hood1',
        imgSrc: '/hood1.jpeg',
        title: 'Vintage Hood',
        description: 'Classic vintage-inspired hoodie with a relaxed fit. Soft brushed fleece interior — perfect for layering all season.',
        price: '$74',
        badge: 'Trending',
    },
    {
        id: 'hood2',
        imgSrc: '/hood2.jpeg',
        title: 'Chinese Hood',
        description: 'Bold oriental embroidery on a heavyweight cotton-blend shell. A statement piece built to turn heads.',
        price: '$79',
        badge: null,
    },
    {
        id: 'hood3',
        imgSrc: '/hood3.jpeg',
        title: 'White Dragon',
        description: 'Iconic white dragon embroidered edition — limited production run. Heavyweight fleece, oversized silhouette.',
        price: '$94',
        badge: 'Limited',
    },
];

export default function HoodiesSection() {
    return (
        <section style={{ background: '#f4f4f4', padding: '6rem clamp(1.5rem, 5vw, 4rem)' }}>
            <div style={{ maxWidth: 1160, margin: '0 auto' }}>
                <SectionHeader eyebrow="Outerwear" title="Hoodie Collection" />
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
