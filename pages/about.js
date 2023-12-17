import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Image } from 'primereact/image';
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
                            <div className={styles.storyImage}>
                                <Image src='/public/story-img' alt='story-img' className=''/>
                            </div>
                            <div className={styles.storyContent}>
                                <p className={styles.storyHeading}>Our Story</p>
                                <p className={styles.storySubHeading}>Nurturing Beauty, Empowering Confidence</p>
                                <p className={styles.storyContent}>From humble beginnings to becoming a haven for beauty enthusiasts, our story is woven with passion, dedication, and a commitment to empowering individuals through self-expression.</p>
                            </div>
                        </div>
                        <div className={styles.visionContainer}>
                            <div className={styles.visionContent}>
                                <p className={styles.visionHeading}>Our Vision</p>
                                <p className={styles.visionSubHeading}>Elevating Beauty Beyond Asthetics</p>
                                <p className={styles.visionContent}>We believe in transformative experiences that go beyond aesthetics, fostering self-love and confidence. Our commitment is to redefine beauty standards and inspire individuals to embrace their uniqueness.</p>
                            </div>
                            <div className={styles.visionImage}>
                                <Image src='/public/vision-img' alt='vision-img' className=''/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <Image src='/public/about-img' alt='about-img' className=''/>
                    </div>
                </div>
                <div ref={contactUsRef}><Footer/></div>
            </div>
        </>
    )
}