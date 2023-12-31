import { useState, useEffect } from 'react';
import Container from '@/components/Container/Container';
import Title from '@/components/Title/Title';
import styles from './Electricity.module.scss';

const Electricity = () => {
  const [number, setNumber] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumber = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <section
      className={styles.section_electricity}
      id="electricity"
      role="region"
    >
      <Container className={styles.container_electricity}>
        <Title h={2} className={styles.electricity_title}>
          Electricity we produced for all time
        </Title>
        <div
          role="presentation"
          className={styles.textWrapper}
          aria-live="polite"
        >
          <span
            className={styles.number}
            aria-label={`Produced electricity: ${formatNumber(
              number
            )} kilowatt-hours`}
          >
            {formatNumber(number)}
          </span>
          <span className={styles.unit} aria-hidden="true">
            KWh
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Electricity;
