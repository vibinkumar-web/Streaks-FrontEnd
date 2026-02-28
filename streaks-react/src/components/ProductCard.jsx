import React from 'react';

export default function ProductCard({ id, imgSrc, title, description, price, badge }) {
    return (
        <div id={id} className="product-card">

            {/* Image */}
            <div className="product-card__img">
                {badge && <span className="product-card__badge">{badge}</span>}
                <img src={imgSrc} alt={title} loading="lazy" />
            </div>

            {/* Body */}
            <div className="product-card__body">
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__desc">{description}</p>

                <div className="product-card__footer">
                    <span className="product-card__price">{price}</span>
                    <a href="#" className="product-card__btn">Buy Now</a>
                </div>
            </div>

        </div>
    );
}
