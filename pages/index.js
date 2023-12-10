import Nav from '@/component/nav';
import GoogleAnalytics from '@/component/GoogleAnalytics';
import CookieBanner from '@/component/CookieBanner';
import Home from '@/component/home';
import Footer from '@/component/footer';
import styles from '@/styles/utils.module.css'
import Main from '@/component/service';

export default function Salon() {
  return(
    <>
    <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000'/>
    <div className={styles.backgroundFrame}>
      <Nav />
      <Home />
    </div>
    <Main />
    <Footer />
    {/* <CookieBanner/> */}
    </>
  )
}