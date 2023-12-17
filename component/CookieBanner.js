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
        <div className={`${`${cookieConsent ? "hidden" : "flex"} justify-content-center align-items-center flex-column w-full fixed left-0 right-0`}  ${styles.CBContainer}`}>
            <p>This site uses cookies to measure and improve your performance.</p>
            <div className={`${'flex justify-content-around w-4'} ${styles.CBButtons}`}>
                <Button label="Opt-Out" icon="" onClick={() => setCookieConsent(false)} />
                <Button label="Details" icon="" />
                <Button label="Accept" loading={loading} onClick={() => setCookieConsent(true)} />
            </div>
        </div>
    )}