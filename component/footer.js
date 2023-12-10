import styles from '../component/css/footer.module.css'
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { Button } from 'primereact/button';

export default function Footer(){
    const [email, setEmail] = React.useState('');
    const [isValidEmail, setIsValidEmail] = React.useState(true);


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsValidEmail(validateEmail(emailValue));
    };

    const Mailchimp=(validationResult) => {

    }

    return(
        <div id='footer' className={`${'flex flex-column align-items-center justify-content-center p-4'} ${styles.bgColor}`}>
            <p className={`${'text-center text-2xl sm:text-3xl text-black-alpha-90 uppercase mt-4 mb-4'}`}>subscribe to our newsletter</p>
            <div className='flex flex-row w-full justify-content-center mb-4'>
                <InputText value={email}  placeholder="Email" onChange={handleEmailChange} className={`${'w-7 sm:w-2 border-round-2xl text-white'} ${styles.inputarea} ${!isValidEmail && 'invalid-email'}`}/>
                <Button label="Submit" className={`${'border-round-2xl bg-black-alpha-90 text-white'} ${styles.button}`} onClick={Mailchimp}/>
            </div> 
            <div className="flex flex-row w-7 justify-content-around sm:w-3 mb-4">
                <i className={`${"pi pi-facebook"} ${styles.icons}`}></i>
                <i className={`${"pi pi-instagram"} ${styles.icons}`}></i>
                <i className={`${"pi pi-whatsapp"} ${styles.icons}`}></i>
                <i className={`${"pi pi-twitter"} ${styles.icons}`}></i>
            </div>         
            <p className='text-center'>© 2023 RAZORS EDGE Inc</p>
        </div>
    )
}