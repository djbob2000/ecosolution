import { useState } from 'react';
import MenuIcon from '@/assets/icons/menu.svg?react';
import styles from './Burger.module.scss';
import { Menu } from '../Menu/Menu';

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
