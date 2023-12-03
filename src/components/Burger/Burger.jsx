import useToggleMenu from '@/hooks/useToggleMenu';
import MenuIcon from '@/assets/icons/menu.svg?react';
import styles from './Burger.module.scss';
import { Menu } from '../Menu/Menu';

export const Burger = () => {
  const [isOpen, toggleMenu] = useToggleMenu();

  return (
    <>
      <button
        className={styles.burger}
        tabIndex={0}
        role={'button'}
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>
      {isOpen && <Menu toggleMenu={toggleMenu} />}
    </>
  );
};
