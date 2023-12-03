import PropTypes from 'prop-types';
import { menuItems } from '@/constants/menuItems';
import styles from './MenuList.module.scss';
import ArrowTopRightIcon from '@/assets/icons/arrow-top-right.svg?react';

export default function MenuList({ toggleMenu }) {
  return (
    <ul className={styles['menu-list']} role="menu-list">
      {menuItems.map((item, index) => (
        <li key={item.text || index} className={styles['menu-item']}>
          <a
            href={item.href}
            role="menu-item"
            className={styles['menu-item-link']}
            onClick={toggleMenu}
          >
            {item.text} <ArrowTopRightIcon />
          </a>
        </li>
      ))}
    </ul>
  );
}

MenuList.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
