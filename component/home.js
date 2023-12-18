import styles from './css/home.module.css'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';

export default function Home(){
    const header= 'Where style meets Precision'
    const subheader = `Get Yourself Groomed for The New Year's Eve.... And Ring In 2023 With Unmatched Elegance !!`;
    
    // useState for using Dialog
    const [visible, setVisible] = useState(false);
    
    return (
        <>
            <div id='home' className={styles.backgroundFrame}>
                <video autoPlay muted loop id="backgroundVideo" className={`${styles.backgroundVideo}`}>
                        <source src="/salon.mp4" type="video/mp4" />
                </video>
                <div className={`${"flex flex-column align-items-center justify-content-center h-screen"}`}>
                    <p id='heroTitleText' className={`${'text-center text-4xl xl:text-7xl sm:font-bold capitalize mt-0 mb-0'} ${styles.Herotext}`}>{header}</p>
                    <p id='heroSubTitleText' className={`${'text-center sm:text-base sm:font-bold mb-7'} ${styles.Herotext}`}>{subheader}</p>

                    <Button className={`${styles.offerButton}`} label="Get Offers" onClick={() => setVisible(true)} />
                    <Dialog visible={visible} onHide={() => setVisible(false) } className='p-0'
                        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                        <div id='bannerContainer' className="flex justify-content-around align-items-center w-full">
                            <div id='exclusiveOfferContent' className="flex align-items-center flex-column justify-content-center">
                                <div className="text-center text-black-alpha-80 p-2 mt-2 border-round-3xl bg-yellow-200 w-full font-bold">Exclusive Offer</div>
                                <p>💥 Valid Until January 1st! 💥</p>
                                <p className="text-center text-yellow-200 p-2 m-0 text-3xl">SAVE UP TO</p>
                                <div className='flex align-items-center justify-content-center'>
                                    <div id='20NumberText' className="text-center text-yellow-200 text-8xl">20</div>
                                    <div className='flex flex-column align-items-center justify-content-around'>
                                        <div id='PercentageText' className="text-center text-yellow-200 text-3xl">%</div>
                                        <div id='OffText' className="text-center text-yellow-200 text-3xl">OFF</div>
                                    </div>
                                </div>
                                <p className="text-center font-semibold">ON YOUR FIRST VISIT</p>
                            </div>
                            <div className={`${styles.offerBackground} flex flex-column align-items-center justify-content-center h-auto`}>
                                <div id='offerBackgroundImg' className={`text-center m-1 border-round-md h-6 ${styles.offerText}`} />
                                <p id='offerSubscribeText' className='text-center text-yellow-200 text-2xl mt-5'>SUBSCRIBE TO OUR NEWSLETTER</p>
                                <div className='m-2 flex flex-column align-items-center justify-content-around h-6rem'>
                                    <InputText id='offerInputEmail' label="Email Address" placeholder='Enter your Email Address' className='z-1 text-black-alpha-80' />
                                    <Button id='offerEmailSubmit' label='Submit' className='' />
                                </div>
                                <p id='likingOfferText' className={`text-center text-white font-medium text-lg mt-5 ${styles.offerText}`}>THE FIRST 100 CUSTOMERS WILL <br/>RECEIVE A COMPLIMENTARY BEARD TRIM!</p>                                        
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </>
    )
}