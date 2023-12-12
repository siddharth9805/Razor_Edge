import Nav from '@/component/nav';
import Home from '@/component/home';
import Footer from '@/component/footer';
import styles from '@/styles/utils.module.css'
import Main from '@/component/service';

export default function Salon() {
  return(
    <>
    <div className={styles.backgroundFrame}>
      <Nav />
      <Home />
    </div>
    <Main />
    <Footer />
    </>
  )
}