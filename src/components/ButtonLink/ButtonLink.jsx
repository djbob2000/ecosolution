import PropTypes from 'prop-types';
import ArrowDownIcon from '@/assets/icons/arrowDown.svg?react';
import styles from './ButtonLink.module.scss';

export const ButtonLink = ({ children, to }) => {
  return (
    <a href={to} className={styles.button} role="button">
      {children}
      <ArrowDownIcon />
    </a>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};
