import React from 'react';
import styles from './css/carousel.module.css';

export default function MyCarouse(){
    const items = [
        <img src="/demo.png" alt="Adidas" />,
        <img src="/demo.png" alt="Porsche" />,
        <img src="/demo.png" alt="Volvo" />,
        <img src="/demo.png" alt="Adidas" />,
        <img src="/demo.png" alt="Porsche" />,
        <img src="/demo.png" alt="Volvo" />,
        <img src="/demo.png" alt="Porsche" />,
        <img src="/demo.png" alt="Volvo" />,
        <img src="/demo.png" alt="Adidas" />,
        <img src="/demo.png" alt="Porsche" />,
        <img src="/demo.png" alt="Volvo" />,
        <img src="/demo.png" alt="Adidas" />,
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
