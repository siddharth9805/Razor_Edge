import Nav from '@/component/nav';
import Home from '@/component/home';
import Footer from '@/component/footer';
import styles from '@/styles/utils.module.css'
import Main from '@/component/service';
import MyCarousel from '@/component/carousel';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Salon() {
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

  return(
    <>
    <div className='overflow-x-hidden'>
      <div className={styles.backgroundFrame}>
        <Nav onMenuClick={onMenuClick} />
        <div ref={homeRef}><Home /></div>
      </div>
      <MyCarousel />
        <div ref={servicesRef}><Main /></div>
        <div ref={contactUsRef}><Footer /></div>
    </div>
    </>
  )
}