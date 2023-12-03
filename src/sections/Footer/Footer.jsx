import styles from './Footer.module.scss';
import FbIcon from '../../assets/icons/footer/fb.svg?react';
import InstagramIcon from '../../assets/icons/footer/instagram.svg?react';
import Logo from '@/components/Logo/Logo';
import CircularArrowButton from '@/components/CircularArrowButton/CircularArrowButton';
import Container from '@/components/Container/Container';
const Footer = () => {
  return (
    <>
      <Container className={styles['footer-container']}>
        <footer className={styles.footer} id="footer">
          <div className={styles.wrapper}>
            <Logo className={styles.logo} />
            <a href="#main" className={styles['to-top']}>
              <CircularArrowButton angle={0} className={styles.btn} />
            </a>
            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FbIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className={styles.adress}>
            <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
            <span>office@ecosolution.com</span>
            <span>ecosolution © 2023</span>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
