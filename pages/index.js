import Nav from '@/component/nav';
import Home from '@/component/home';
import Footer from '@/component/footer';
import styles from '@/styles/utils.module.css'
import Main from '@/component/service';
import MyCarousel from '@/component/carousel';
import React, { useRef } from 'react';

export default function Salon() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);

  const onMenuClick = (sectionId) => {
    let ref;
    if (sectionId === 'home') ref = homeRef;
    if (sectionId === 'services') ref = servicesRef;
    if (sectionId === 'contact-us') ref = contactUsRef;

    ref?.current?.scrollIntoView({ behavior: 'smooth' });
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