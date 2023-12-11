import styles from '../component/css/footer.module.css'
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function Footer(){
    const [email, setEmail] = React.useState('');
    const subscribeTag= 'subscribe to our newsletter';
    const watermarkTag= '© 2023 RAZORS EDGE Inc';
    const toast = React.useRef(null);


    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
      };
    
    const getemailvalue = (e)=>{
        setEmail(e.target.value);
    }

    const Mailchimp =() => {
        const result=validateEmail(email);
        if (result){
            toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
        }
        else{
            toast.current.show({severity:'error', summary: 'Error', detail:'invaild', life: 3000});
        }
    }

    return(
        <div id='contact-us' className={`${'flex flex-column align-items-center justify-content-center p-4'} ${styles.bgColor}`}>
            <Toast ref={toast} />
            <p className={`${'text-center text-xl sm:text-3xl text-black-alpha-90 uppercase mt-4 mb-4'}`}>{subscribeTag}</p>
            <div className='flex flex-row w-full justify-content-center mb-4'>
                <InputText value={email}  placeholder="Email" onChange={getemailvalue} className={`${'w-7 sm:w-2 border-round-2xl text-white'} ${styles.inputarea}`}/>
                <Button label="Submit" className={`${'border-round-xl sm:border-round-2xl bg-black-alpha-90 text-white'} ${styles.button}`} onClick={Mailchimp}/>
            </div> 
            <div className="flex flex-row w-7 justify-content-around sm:w-3 mb-4">
                <i className={`${"pi pi-facebook"} ${styles.icons}`}></i>
                <i className={`${"pi pi-instagram"} ${styles.icons}`}></i>
                <i className={`${"pi pi-whatsapp"} ${styles.icons}`}></i>
                <i className={`${"pi pi-twitter"} ${styles.icons}`}></i>
            </div>         
            <p className='text-center m-0'>{watermarkTag}</p>
        </div>
    )
}