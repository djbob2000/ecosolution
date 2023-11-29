import IconLogo from '@/assets/icons/logo-icon.svg?react';

import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <a href="#main" className={styles.logo}>
      <IconLogo />
      <span className={styles.logoName}>ecosolution</span>
      <p className={styles.tagline}>
        <span className={styles.accentText}>GREEN</span>ERGY FOR LIFE
      </p>
    </a>
  );
}
