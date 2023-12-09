import styles from './css/home.module.css'
import { Button } from 'primereact/button';

export default function Home(){
    const subheader = 'Get a free beard trim with every haircut';

    return (
        <>
            <video autoPlay muted loop id="backgroundVideo" className={styles.backgroundVideo}>
                    <source src="/salon.mp4" type="video/mp4" />
            </video>
            <div className={`${"flex flex-column align-items-center justify-content-center justify-item-around"} ${styles.herocontainer}`}>
                <p className={`${'text-center text-4xl xl:text-7xl sm:font-bold capitalize mt-0 mb-0'} ${styles.Herotext}`}>Where style meets Precision</p>
                <p className={`${'text-center sm:text-base sm:font-bold mb-7'} ${styles.Herotext}`}>Share the Beauty, Enjoy the Rewards - Bring a Friend, and Both Shine with a Special Offer</p>
                <Button label='Book Appointment' className={`${'sm:border-round-lg sm:pt-3 sm:pb-3 sm:pr-7 sm:pl-7 sm:font-semibold mt-7'} ${styles.book_button}`}></Button>
            </div>
        </>
    )
}