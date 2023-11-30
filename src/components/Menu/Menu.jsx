import PropTypes from 'prop-types';
import IconClose from '@/assets/icons/close.svg?react';
import styles from './Menu.module.scss';
import MenuList from './MenuList/MenuList';

export const Menu = ({ toggleMenu }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.menu}>
        <button
          type="button"
          className={styles.btn_close}
          onClick={() => toggleMenu()}
          role="button"
          aria-label="close menu"
        >
          <IconClose className={styles.closeIcon} />
          <span className={styles.closeText}>close</span>
        </button>
        <MenuList />
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
