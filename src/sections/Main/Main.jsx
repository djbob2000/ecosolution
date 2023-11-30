import Container from '@/components/Container/Container';
import Title from '@/components/Title/Title';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';
import styles from './Main.module.scss';

import main from '@/assets/images/main/main.jpg';
import main2x from '@/assets/images/main/main@2x.jpg';
import mainTablet from '@/assets/images/main/main-tablet.jpg';
import mainTablet2x from '@/assets/images/main/main-tablet@2x.jpg';
import mainDesktop from '@/assets/images/main/main-desktop.jpg';
import mainDesktop2x from '@/assets/images/main/main-desktop@2x.jpg';

export default function Main() {
  return (
    <section className={styles.section}>
      <Container>
        <div role="presentation" className={styles.titleBlock}>
          <Title h={1} text="RENEWABLE ENERGY For any task" />
          <div role="presentation" className={styles.textWrapper}>
            <p className={styles.text}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <ButtonArrow text="Learn more" />
          </div>
        </div>
        <ul className={styles.contactsList}>
          <li className={styles.contact}>
            <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
          </li>
          <li className={styles.contact}>
            <span>office@ecosolution.com</span>
          </li>
          <li className={styles.contact}>
            <span>ecosolution &copy; 2023</span>
          </li>
        </ul>
        <picture className={styles.picture}>
          <source
            media="(min-width: 1280px)"
            srcSet={`${mainDesktop} 1x, ${mainDesktop2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${mainTablet} 1x, ${mainTablet2x} 2x`}
          />
          <source srcSet={`${main2x} 2x`} />
          <img src={main} alt="Wind turbine clean energy" />
        </picture>
      </Container>
    </section>
  );
}
