import PropTypes from 'prop-types';
import styles from './InfoBlock.module.scss';

export default function InfoBlock({ iconComponent, title, children }) {
  return (
    <div className={styles.InfoBlock}>
      <div className={styles.title}>
        {iconComponent}
        {title}
      </div>
      {children}
    </div>
  );
}

InfoBlock.propTypes = {
  iconComponent: PropTypes.node,
  title: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
};
