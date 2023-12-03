import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconArrowRight from '@/assets/icons/arrowRight.svg?react';
import styles from './ButtonArrow.module.scss';

const ButtonArrow = ({ children, type, className }) => {
  const buttonClass = classNames(styles.button, className);

  return (
    <button className={buttonClass} aria-label={children} type={type}>
      {children}
      <span className={styles.icon}>
        <IconArrowRight />
      </span>
    </button>
  );
};

ButtonArrow.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

ButtonArrow.defaultProps = {
  type: 'button',
};

export default ButtonArrow;
