import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowRight from '@/assets/icons/cases/arrowRight.svg?react';

import styles from './CircularArrowButton.module.scss';

export default function CircularArrowButton({
  angle = 90,
  outlined = false,
  className,
  ...props
}) {
  const buttonClasses = classNames(styles.btn, {
    [styles.outlined]: outlined,
  });

  const totalAngle = angle - 90;
  const svgStyle = {
    transform: `rotate(${totalAngle}deg)`,
  };

  return (
    <button
      type="button"
      role="button"
      className={classNames(buttonClasses, className)}
      {...props}
    >
      <ArrowRight style={svgStyle} />
    </button>
  );
}

CircularArrowButton.propTypes = {
  caption: PropTypes.string,
  angle: PropTypes.number,
  outlined: PropTypes.bool,
  className: PropTypes.string,
};
