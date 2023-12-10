import styles from './css/home.module.css'
import { Button } from 'primereact/button';
import React from 'react';
import { useRouter } from 'next/router';

export default function Home(){
    const header= 'Where style meets Precision'
    const subheader = 'Share the Beauty, Enjoy the Rewards - Bring a Friend, and Both Shine with a Special Offer';
    const router = useRouter();

    const redirectToUrl = () => {
        router.push('/appointment');
      };
    
    return (
        <>
            <div id='home' className={styles.backgroundFrame}>
                <video autoPlay muted loop id="backgroundVideo" className={styles.backgroundVideo}>
                        <source src="/salon.mp4" type="video/mp4" />
                </video>
                <div className={`${"flex flex-column align-items-center justify-content-center"} ${styles.herocontainer}`}>
                    <p className={`${'text-center text-4xl xl:text-7xl sm:font-bold capitalize mt-0 mb-0'} ${styles.Herotext}`}>{header}</p>
                    <p className={`${'text-center sm:text-base sm:font-bold mb-7'} ${styles.Herotext}`}>{subheader}</p>
                    <Button label='Book Appointment' className={`${'sm:border-round-lg sm:pt-3 sm:pb-3 sm:pr-7 sm:pl-7 sm:font-semibold mt-7'} ${styles.book_button}`} onClick={redirectToUrl}></Button>
                </div>
            </div>
        </>
    )
}