import PropTypes from 'prop-types';
import styles from './Title.module.scss';

export default function Title({ h, text }) {
  switch (h) {
    case 1:
      return <h1 className={styles['h01']}>{text}</h1>;

    case 2:
      return <h2 className={styles['h02']}>{text}</h2>;

    case 3:
      return <h3 className={styles['h03']}>{text}</h3>;

    default:
      return null;
  }
}

Title.propTypes = {
  h: PropTypes.number.isRequired,
  text: PropTypes.any.isRequired,
};
