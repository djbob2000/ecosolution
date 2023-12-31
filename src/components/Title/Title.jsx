import { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Title.module.scss';

export default function Title({ children, h, className }) {
  const headingClass = styles[`h0${h}`] || '';

  const combinedClass = classNames(headingClass, className);

  return h >= 1 && h <= 3
    ? createElement(
        `h${h}`,
        { className: combinedClass, role: 'heading', ariaLevel: h },
        children
      )
    : null;
}

Title.propTypes = {
  h: PropTypes.oneOf([1, 2, 3]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
