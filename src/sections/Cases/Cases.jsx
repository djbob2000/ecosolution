import { useState, useRef } from 'react';
import CasesSlider from '@/components/CasesSlider/CasesSlider';
import styles from './Cases.module.scss';
import Container from '@/components/Container/Container';
import Title from '@/components/Title/Title';
import CircularArrowButton from '@/components/CircularArrowButton/CircularArrowButton';
import casesData from '@/constants/casesData';

export default function Cases() {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const AllSlideNumber = casesData?.length || 0;
  const swiperRef = useRef(null);

  const handleSlideChange = newCurrentSlide => {
    setCurrentSlideNumber(newCurrentSlide + 1);
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <section className={styles.section_cases} id="cases" role="region">
        <Container className={styles.container_cases}>
          <div className={styles['slider-header']}>
            <Title h={2} className={styles['title-cases']} aria-live="polite">
              Successful cases of our company
            </Title>
            <div className={styles['slider-control']}>
              <span
                className={styles['slider-current-slide']}
                aria-live="assertive"
              >
                {currentSlideNumber.toString().padStart(2, '0')}
                <span>/{AllSlideNumber.toString().padStart(2, '0')}</span>
              </span>
              <div className={styles['btn-wrap']}>
                <CircularArrowButton
                  outlined={true}
                  angle={-90}
                  onClick={slidePrev}
                  aria-label="Previous Slide"
                />
                <CircularArrowButton
                  outlined={true}
                  angle={90}
                  onClick={slideNext}
                  aria-label="Next Slide"
                />
              </div>
            </div>
          </div>

          <CasesSlider
            casesData={casesData}
            onSlideChange={handleSlideChange}
            swiperRef={swiperRef}
          />
        </Container>
      </section>
    </>
  );
}
