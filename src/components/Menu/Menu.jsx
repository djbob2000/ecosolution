import PropTypes from 'prop-types';
import IconClose from '@/assets/icons/close.svg?react';
import FbIcon from '@/assets/icons/fb.svg?react';
import InsaIcon from '@/assets/icons/instagram.svg?react';
import styles from './Menu.module.scss';
import MenuList from './MenuList/MenuList';

export const Menu = ({ toggleMenu }) => {
  return (
    <div className={styles.backdrop} onClick={toggleMenu}>
      <div className={styles.menu}>
        <button
          type="button"
          className={styles.btn_close}
          role="button"
          aria-label="close menu"
          onClick={toggleMenu}
        >
          <IconClose className={styles.closeIcon} />
          <span className={styles.closeText}>close</span>
        </button>
        <div className={styles.menuContent}>
          <MenuList toggleMenu={toggleMenu} />
          <div className={styles.socials}>
            <FbIcon />
            <InsaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
