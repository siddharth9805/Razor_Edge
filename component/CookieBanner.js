import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import styles from './css/cookiebanner.module.css';


export default function CookieBanner(){
    const [loading, setLoading] = useState(false);
    const [cookieConsent, setCookieConsent] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setCookieConsent(true);
        }, 2000);
    };

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed ${cookieConsent ? "hidden" : "flex"} bottom-0 left-0 right-0 
                          px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}>

            <div className='text-center'>
                {/* <Link href="/info/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link> */}
                <p className={styles.CBContent}>This site uses cookies to measure and improve your performance.</p>
                <div className={`justify-content-center flex gap-5 ${styles.CBButtons}`}>
                    <Button label="Opt-Out" icon="" onClick={() => setCookieConsent(false)} />
                    <Button label="Details" icon="" />
                    <Button label="Accept" loading={loading} onClick={load} />
                </div>
            </div>
            {/* <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>    */}
        </div>
    )}