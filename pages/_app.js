import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/styles/theme/themes/mytheme/theme.scss';


export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  )
}