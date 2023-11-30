import PropTypes from 'prop-types';

import IconArrowRight from '@/assets/icons/arrowRight.svg?react';

import styles from './ButtonArrow.module.scss';

export default function ButtonArrow({ text }) {
  return (
    <button className={styles.button}>
      {text}
      <span className={styles.icon}>
        <IconArrowRight />
      </span>
    </button>
  );
}

ButtonArrow.propTypes = {
  text: PropTypes.any.isRequired,
};
