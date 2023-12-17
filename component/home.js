import styles from './css/home.module.css'
import { Button } from 'primereact/button';
import React from 'react';
import { useRouter } from 'next/router';

export default function Home(){
    const header= 'Where style meets Precision'
    const subheader = `Get Yourself Groomed for The New Year's Eve.... And Ring In 2023 With Unmatched Elegance !!`;
    const router = useRouter();

    const redirectToUrl = () => {
        router.push('/');
      };
    
    return (
        <>
            <div id='home' className={styles.backgroundFrame}>
                <video autoPlay muted loop id="backgroundVideo" className={`${styles.backgroundVideo}`}>
                        <source src="/salon.mp4" type="video/mp4" />
                </video>
                <div className={`${"flex flex-column align-items-center justify-content-center h-screen"}`}>
                    <p id='heroTitleText' className={`${'text-center text-4xl xl:text-7xl sm:font-bold capitalize mt-0 mb-0'} ${styles.Herotext}`}>{header}</p>
                    <p id='heroSubTitleText' className={`${'text-center sm:text-base sm:font-bold mb-7'} ${styles.Herotext}`}>{subheader}</p>
                    <Button id='viewOfferBTN' label='View Offers' className={`${'sm:border-round-lg sm:pt-3 sm:pb-3 sm:pr-7 sm:pl-7 sm:font-semibold mt-7'} ${styles.book_button}`} onClick={redirectToUrl}></Button>
                </div>
            </div>
        </>
    )
}