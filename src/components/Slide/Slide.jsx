import PropTypes from 'prop-types';
import styles from './Slide.module.scss';
import CircularArrowButton from '@/components/CircularArrowButton/CircularArrowButton';

export default function Slide({
  imageName,
  description,
  place,
  enterprise,
  date,
}) {
  const basePath = import.meta.env.BASE_URL;
  return (
    <div className={styles.slide} role="presentation">
      <div className={styles['slide-thumb']}>
        <img
          className={styles['slide-img']}
          src={`${basePath}/images/cases/${imageName}-1x.jpg`}
          srcSet={`${basePath}/images/cases/${imageName}-1x.jpg 480w, ${basePath}/images/cases/${imageName}-2x.jpg 768w, ${basePath}/images/cases/${imageName}-3x.jpg 1280w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
          alt={description}
        />
      </div>
      <div className={styles['slide-text-content']}>
        <div className={styles['slide-place']}>
          <p>{`${place} ${enterprise}`}</p>
          <CircularArrowButton className={styles['slide-btn']} angle={45} />
        </div>
        <div className={styles['slide-description']}>
          <p>{description}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  imageName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  enterprise: PropTypes.string.isRequired,
};
