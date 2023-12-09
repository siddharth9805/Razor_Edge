import Nav from '@/component/nav';
import GoogleAnalytics from '@/component/GoogleAnalytics';
import CookieBanner from '@/component/CookieBanner';
import Home from '@/component/home';

export default function Salon() {
  return(
    <>
    <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000'/>
    <Nav />
    <Home />
    </>
  )
}