import useScrollHook from '@/hooks/useScrollHook';
import Container from '../../components/Container/Container';
import styles from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import { Burger } from '@/components/Burger/Burger';
import ButtonLink from '@/components/ButtonLink/ButtonLink';

export const Header = () => {
  const { backgroundColor } = useScrollHook();

  return (
    <header
      id="header"
      className={styles.header}
      role="banner"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Container className={styles.header__container}>
        <Logo />
        <div className={styles.btnWrap}>
          <Burger />
          <ButtonLink to={'#contacts'} aria-label="Navigate to Contacts">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
};
