import { useState } from 'react';
import Container from '@/components/Container/Container';
import Question from '@/components/Question/Question';
import Title from '@/components/Title/Title';
import faqQuestions from '@/constants/faqQuestions';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import styles from './FAQ.module.scss';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(faqQuestions[0].id);

  const toggleAnswer = questionId => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className={styles.section_faq} id="faq">
      <Container className={styles.container_faq}>
        <Title h={2} className={styles.title_faq}>
          Frequently Asked Questions
        </Title>
        <div className={styles.ul_container}>
          <ul>
            {faqQuestions.map(item => (
              <Question
                key={item.id}
                item={item}
                isOpen={openQuestion === item.id}
                toggleAnswer={toggleAnswer}
              />
            ))}
          </ul>
        </div>
        <div className={styles.cta}>
          <p className={styles.after_text}>
            Didn&apos;t find the answer to your question?
          </p>
          <ButtonLink to={'#contact'} className={styles.buttonLink}>
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
