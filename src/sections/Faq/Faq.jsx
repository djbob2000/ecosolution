import { useState } from 'react';
import Container from '@/components/Container/Container';
import Question from '@/components/Question/Question';
import Title from '@/components/Title/Title';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import faqQuestions from '@/constants/faqQuestions';
import styles from './Faq.module.scss';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(faqQuestions[0].id);

  const toggleAnswer = questionId => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className={styles.section_faq} id="faq" role="region">
      <Container className={styles.container_faq}>
        <Title h={2} className={styles.title_faq}>
          Frequently Asked Questions
        </Title>
        <div
          className={styles.ul_container}
          role="region"
          aria-label="Frequently Asked Questions"
        >
          <ul>
            {faqQuestions.map(item => (
              <Question
                key={item.id}
                item={item}
                isOpen={openQuestion === item.id}
                toggleAnswer={toggleAnswer}
                aria-expanded={openQuestion === item.id}
                aria-controls={`answer-${item.id}`}
              />
            ))}
          </ul>
        </div>
        <div className={styles.cta}>
          <p className={styles.after_text}>
            Didn&apos;t find the answer to your question?
          </p>
          <ButtonLink
            to={'#contacts'}
            className={styles.buttonLink}
            aria-label="Contact Us"
          >
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
