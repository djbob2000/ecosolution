import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/swiper-bundle.css';
import styles from './CasesSlider.module.scss';

import Slide from '@/components/Slide/Slide';

const CasesSlider = ({ casesData, onSlideChange, swiperRef }) => {
  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const newCurrentSlide = swiperRef.current.swiper.realIndex;
      onSlideChange(newCurrentSlide);
    }
  };
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={isDesktop ? 48 : 24}
        loop={true}
        direction="horizontal"
        onSlideChange={handleSlideChange}
      >
        {casesData.map((caseItem, index) => (
          <SwiperSlide key={index} className={styles['swiper-slide']}>
            <Slide {...caseItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CasesSlider.propTypes = {
  casesData: PropTypes.array,
  onSlideChange: PropTypes.func,
  swiperRef: PropTypes.object,
};

export default CasesSlider;
