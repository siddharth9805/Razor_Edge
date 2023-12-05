import Layout from '@/component/layout';
import GoogleAnalytics from '@/component/GoogleAnalytics';
import CookieBanner from '@/component/CookieBanner';

export default function Home() {
  return(
    <>
    <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000'/>
    <Layout>
    </Layout>
    <CookieBanner />
    </>
  )
}