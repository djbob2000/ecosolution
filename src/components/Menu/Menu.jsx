import { menuItems } from '@/constants/menuItems';
import IconClose from '@/assets/icons/close.svg?react';
import styles from './Menu.module.scss';

export const Menu = toggleMenu => {
  return (
    <div className={styles.backdrop}>
      <div className="menu">
        <div className={styles.btn_close}>
          <IconClose />
          <span>close</span>
        </div>

        <ul className="menu__list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
