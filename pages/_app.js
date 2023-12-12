import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/styles/theme/themes/mytheme/theme.scss';
import '@/styles/styles.css';
import GoogleAnalytics from '@/component/GoogleAnalytics';
import CookieBanner from '@/component/CookieBanner';

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-KP0KHV37L5'/>
      <Component {...pageProps} />
      <CookieBanner/>
    </PrimeReactProvider>
  )
}