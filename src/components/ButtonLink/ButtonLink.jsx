import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowDownIcon from '@/assets/icons/arrowDown.svg?react';
import styles from './ButtonLink.module.scss';

const ButtonLink = ({ children, to, className }) => {
  const combinedClass = classNames(styles.button, className);

  return (
    <a href={to} className={combinedClass} role="button">
      {children}
      <ArrowDownIcon />
    </a>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonLink;
