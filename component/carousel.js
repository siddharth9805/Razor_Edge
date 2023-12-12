import React from 'react';
import styles from './css/carousel.module.css';

export default function MyCarouse(){
    const items = [
        <img src="/product_1.png" alt="product_1" />,
        <img src="/product_6.png" alt="product_6" />,
        <img src="/product_7.png" alt="product_7" />,
        <img src="/product_8.png" alt="product_8" />,
        <img src="/product_4.png" alt="product_4" />,
        <img src="/product_5.png" alt="product_5" />,
        <img src="/product_1.png" alt="product_1" />,
        <img src="/product_6.png" alt="product_6" />,
        <img src="/product_7.png" alt="product_7" />,
        <img src="/product_8.png" alt="product_8" />,
        <img src="/product_4.png" alt="product_4" />,
        <img src="/product_5.png" alt="product_5" />,
    ];

    return (
        <div className={`${styles.carouselContainer} ${'flex align-items-center overflow-hidden w-full p-4'}`}>
            <div className={`${styles.carouselTrack} ${'flex'}`}>
                {items.map((item, index) => (
                    <div key={index} className={`${styles.carouselItem} ${'flex align-items-center justify-content-center'}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
