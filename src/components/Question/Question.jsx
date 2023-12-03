import PropTypes from 'prop-types';
import MinusIcon from '@/assets/icons/faq/minus.svg?react';
import PlusIcon from '@/assets/icons/faq/plus.svg?react';

import styles from './Question.module.scss';

const Question = ({ item, isOpen, toggleAnswer }) => (
  <li>
    <div className={styles.question_form}>
      <button
        className={styles.openButton}
        onClick={() => toggleAnswer(item.id)}
      >
        {isOpen ? (
          <MinusIcon className={styles.minusIcon} />
        ) : (
          <PlusIcon className={styles.plusIcon} />
        )}
      </button>
      <p className={styles.question}>{item.question}</p>
    </div>
    {isOpen && (
      <p className={`${styles.answer} ${styles.open}`}>{item.answer}</p>
    )}
  </li>
);

export default Question;

Question.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAnswer: PropTypes.func.isRequired,
};
