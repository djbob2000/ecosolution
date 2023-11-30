import { menuItems } from '@/constants/menuItems';

export default function MenuList() {
  return (
    <ul className="menu__list">
      {menuItems.map((item, index) => (
        <li key={item.text || index}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
}
