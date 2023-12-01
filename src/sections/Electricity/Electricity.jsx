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
    <section className={styles.section_electricity} id="electricity">
      <Container className={styles.container_electricity}>
        <Title h={2} className={styles.electricity_title}>
          Electricity we produced for all time
        </Title>
        <div role="presentation" className={styles.textWrapper}>
          <span className={styles.number}>{formatNumber(number)}</span>
          <span className={styles.unit}>KWh</span>
        </div>
      </Container>
    </section>
  );
};

export default Electricity;
