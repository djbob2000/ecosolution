import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Container.module.scss';

const Container = ({ children, className }) => {
  const classes = classNames(styles.container, className);

  return (
    <div role="presentation" className={classes}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
