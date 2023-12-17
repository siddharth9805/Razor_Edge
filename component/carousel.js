import React from 'react';
import styles from './css/carousel.module.css';

export default function MyCarouse(){
    const items = [
        <img id='sephora-img' src="/product_1.png" alt="product1-logo" />,
        <img id='rituals-img' src="/product_2.png" alt="product2-logo" />,
        <img id='garnier-img' src="/product_3.png" alt="product3-logo" />,
        <img id='athr-img' src="/product_4.png" alt="product4-logo" />,
        <img id='augustis-img' src="/product_5.png" alt="product5-logo" />,
        <img id='aN-img' src="/product_6.png" alt="product6-logo" />,
        <img id='albrey-img' src="/product_7.png" alt="product7-logo" />,
        <img id='aveda-img' src="/product_8.png" alt="product8-logo" />,
        <img id='baermin-img' src="/product_9.png" alt="product9-logo" />,
        <img id='beauty-img' src="/product_10.png" alt="product10-logo" />,
        <img id='dior-img' src="/product_11.png" alt="product11-logo" />,
        <img id='nivea-img' src="/product_12.png" alt="product12-logo" />,
    ];

    return (
        <div id='carouselContainer' className={`${styles.carouselContainer} ${'flex align-items-center overflow-hidden w-full p-4'}`}>
            <div id='carouselBody' className={`${styles.carouselTrack} ${'flex'}`}>
                {items.map((item, index) => (
                    <div key={index} className={`${styles.carouselItem} ${'flex align-items-center justify-content-center'}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
