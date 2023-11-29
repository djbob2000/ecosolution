import Container from '../../components/Container/Container';
import styles from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import { Burger } from '@/components/Burger/Burger';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';

export const Header = () => {
  return (
    <>
      <Container>
        <header className={styles.header}>
          <Logo />
          <div className={styles.btnWrap}>
            <Burger />
            <ButtonLink to={'#'}>Get in touch</ButtonLink>
          </div>
        </header>
      </Container>
    </>
  );
};
