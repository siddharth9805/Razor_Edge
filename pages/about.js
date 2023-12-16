import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Nav from '@/component/nav';
import Footer from '@/component/footer';
import styles from '@/styles/about.module.css';

export default function About() {
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const contactUsRef = useRef(null);
    const router = useRouter();

    const onMenuClick = (sectionId) => {
        switch (sectionId) {
            case 'home':
              router.push('/').then(() => homeRef?.current?.scrollIntoView({ behavior: 'smooth' }));
                break;
            case 'about':
                router.push('/about');
                break;
            case 'services':
              router.pathname !== '/'
              ? router.push('/').then(() => servicesRef?.current?.scrollIntoView({ behavior: 'smooth' }))
              : servicesRef?.current?.scrollIntoView({ behavior: 'smooth' });
            break;
            case 'contact-us':  
                contactUsRef?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    };
    
    return (
        <>
            <div className='overflow-x-hidden'>
                <div className={styles.backgroundFrame}>
                    <Nav onMenuClick={onMenuClick} />
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.leftSection}>
                        <div className={styles.headerContent}>
                            <p>Hello ! Welcome to</p>
                            <h1>Razor Edge</h1>
                            <p>Where your hair journey meets our masterful artistry !!</p>
                            <p>Embracing the hero within yourself, we transform styles with precision and flair.  Here, each snip and style is an epic adventure, crafting bold, empowering looks.  Join us, and unleash the hero within through every cut & colour.</p>
                        </div>
                        <div className={styles.storyContainer}>
                            <div className={styles.storyImage}></div>
                            <div className={styles.storyContent}></div>
                        </div>
                        <div className={styles.visionContainer}>
                            <div className={styles.visionContent}></div>
                            <div className={styles.visionImage}></div>
                        </div>
                    </div>
                    <div className={styles.rightSection}></div>

                </div>
                <div ref={contactUsRef}><Footer/></div>
            </div>
        </>
    )
}