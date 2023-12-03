import Title from '@/components/Title/Title';
import Container from '../../components/Container/Container';
import PhoneIcon from '@/assets/icons/contacts/phone.svg?react';
import EmailIcon from '@/assets/icons/contacts/email.svg?react';
import MapIcon from '@/assets/icons/contacts/map.svg?react';
import FbIcon from '@/assets/icons/fb.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import Form from '../../components/Form/Form';

import styles from './ContactUs.module.scss';
export default function ContactUs() {
  return (
    <>
      <section className={styles['section-contacts']} id="contacts">
        <Container>
          <Title h={2} className={styles['contacts-title']}>
            Contact Us
          </Title>
          <div className={styles['contacts-wrap']}>
            <div className={styles['contacts-info']}>
              <div className={styles['block-wrap']}>
                <span>Phone:</span>
                <div className={styles['line-wrapper']}>
                  <PhoneIcon />{' '}
                  <a href="tel:+380981234567">38 (098) 12 34 567</a>
                </div>
                <div className={styles['line-wrapper']}>
                  <PhoneIcon />{' '}
                  <a href="tel:+380931234567">38 (093) 12 34 567</a>
                </div>
              </div>

              <div className={styles['block-wrap']}>
                <span>E-mail:</span>
                <div className={styles['line-wrapper']}>
                  <EmailIcon />{' '}
                  <a href="mailto:office@ecosolution.com">
                    office@ecosolution.com
                  </a>
                </div>
              </div>

              <div className={styles['block-wrap']}>
                <span>Address:</span>
                <div className={styles['line-wrapper']}>
                  <MapIcon />
                  <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
                </div>
              </div>

              <div className={styles['block-wrap']}>
                <span>Social Networks:</span>
                <div className={styles['social-icons-wrapper']}>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FbIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['form-wrapper']}>
            <Form />
          </div>
        </Container>
      </section>
    </>
  );
}
