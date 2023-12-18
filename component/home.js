import styles from './css/home.module.css'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
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

                    <Button label="Get Offers" onClick={() => setVisible(true)} />
                    <Dialog visible={visible} onHide={() => setVisible(false)}
                        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                        <div id='bannerContainer' className="grid nested-grid">
                            <div id='bannerLeftSection' className="col-4">
                                <div id='bannerLeftHeaderContainer' className="grid">
                                    <div id='exclusiveOfferContent' className="col-12 mt-4">
                                        <div className="text-center text-black-alpha-80 p-3 border-round-3xl bg-yellow-100 font-bold">Exclusive Offer</div>
                                        <p>💥 Valid Until January 1st! 💥</p>
                                    </div>
                                    <div id='saveUptoText' className="col-12 -mt-3">
                                        <div className="text-center text-yellow-200 p-3 text-3xl">SAVE UP TO</div>
                                    </div>
                                    <div className="col-12">
                                        <div className='grid justify-content-center'>
                                            <div className="col-6 -mt-5 -mr-3">
                                                <div id='20NumberText' className="text-center text-yellow-200 text-8xl">20</div>
                                            </div>
                                            <div className="col-6 -mt-4 -ml-1">
                                                <div className="col-12">
                                                    <div id='PercentageText' className="text-center text-yellow-200 text-3xl">%</div>
                                                </div> 
                                                <div className="col-12">
                                                    <div id='OffText' className="text-center text-yellow-200 text-3xl">OFF</div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 -mt-5">
                                        <p className="text-center font-bold">ON YOUR FIRST VISIT</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-8 ${styles.offerBackground}`}>
                                <div id='offerBackgroundImg' className={`text-center m-1 border-round-md h-full ${styles.offerText}`}>
                                    <p id='offerSubscribeText' className='text-center text-yellow-200 text-2xl mt-5'>SUBSCRIBE TO OUR NEWSLETTER</p>


                                    
                                    <p id='likingOfferText' className={`text-center text-white text-lg mt-5 ${styles.offerText}`}>THE FIRST 100 CUSTOMERS WILL <br/>RECEIVE A COMPLIMENTARY BEARD TRIM!</p>            
                                </div>                               
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </>
    )
}