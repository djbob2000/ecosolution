import PropTypes from 'prop-types';
import styles from './Text.module.scss';

export default function Text({ children }) {
  return <p className={styles.text}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
};
