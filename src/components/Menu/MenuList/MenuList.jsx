import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { menuItems } from '@/constants/menuItems';
import styles from './MenuList.module.scss';
import ArrowTopRightIcon from '@/assets/icons/arrow-top-right.svg?react';
import { Link } from 'react-scroll';

export default function MenuList({ toggleMenu }) {
  return (
    <ul className={styles['menu-list']} role="menu-list">
      {menuItems.map((item, index) => (
        <li key={item.text || index} className={styles['menu-item']}>
          <Link
            to={item.href}
            spy={true}
            offset={-120}
            role="menu-item"
            className={styles['menu-item-link']}
            onClick={toggleMenu}
            activeClass={styles['active']}
          >
            {item.text} <ArrowTopRightIcon />
          </Link>
        </li>
      ))}
    </ul>
  );
}

MenuList.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
