import Container from '@/components/Container/Container';
import InfoBlock from '@/components/InfoBlock/InfoBlock';
import Title from '@/components/Title/Title';
import IconMaximizeCircle from '@/assets/icons/about/maximize-circle.svg?react';
import IconGlobalEdit from '@/assets/icons/about/global-edit.svg?react';
import IconCpuCharge from '@/assets/icons/about/cpu-charge.svg?react';
import IconRanking from '@/assets/icons/about/ranking.svg?react';

import AboutWindTablet from '@/assets/images/about/man-worker-firld-by-solar-panels-tablet.jpg';
import AboutWindTablet2x from '@/assets/images/about/man-worker-firld-by-solar-panels-tablet@2x.jpg';
import AboutWindDesktop from '@/assets/images/about/man-worker-firld-by-solar-panels-desktop.jpg';
import AboutWindDesktop2x from '@/assets/images/about/man-worker-firld-by-solar-panels-desktop@2x.jpg';

import AboutManTablet from '@/assets/images/about/wind-farms-fields-tablet.jpg';
import AboutManTablet2x from '@/assets/images/about/wind-farms-fields-tablet@2x.jpg';
import AboutManDesktop from '@/assets/images/about/wind-farms-fields-desktop.jpg';
import AboutManDesktop2x from '@/assets/images/about/wind-farms-fields-desktop@2x.jpg';

import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.section_about} id="about">
      <Container>
        <div role="presentation" className={styles.titleBlock}>
          <Title h={2} className={styles.about_title}>
            Main values of our company
          </Title>
          <div role="presentation" className={styles.textWrapper}>
            <p>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world&apos;s energy needs.
            </p>
          </div>
        </div>
        <div role="presentation" className={styles.gridContainer}>
          <InfoBlock
            iconComponent={<IconMaximizeCircle />}
            title={<Title h={3}>openness</Title>}
          >
            <p className={styles.text}>
              to the world, people, new ideas and projects
            </p>
          </InfoBlock>
          <InfoBlock
            iconComponent={<IconGlobalEdit />}
            title={<Title h={3}>responsibility</Title>}
          >
            <p className={styles.text}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </InfoBlock>

          <picture className={styles.picture}>
            <source
              media="(min-width: 1280px)"
              srcSet={`${AboutManDesktop} 1x, ${AboutManDesktop2x} 2x`}
            />
            <source srcSet={`${AboutManTablet} 1x, ${AboutManTablet2x} 2x`} />
            <img
              src={AboutManTablet}
              alt="Wind farms fields"
              aria-labelledby="Wind farms fields"
            />
          </picture>

          <picture className={styles.picture}>
            <source
              media="(min-width: 1280px)"
              srcSet={`${AboutWindDesktop} 1x, ${AboutWindDesktop2x} 2x`}
            />
            <source srcSet={`${AboutWindTablet} 1x, ${AboutWindTablet2x} 2x`} />
            <img
              src={AboutWindTablet}
              alt="Wind farms fields"
              aria-labelledby="Wind farms fields"
            />
          </picture>

          <InfoBlock
            iconComponent={<IconCpuCharge />}
            title={<Title h={3}>innovation</Title>}
          >
            <p className={styles.text}>
              we use the latest technology to implement non-standard solutions
            </p>
          </InfoBlock>
          <InfoBlock
            iconComponent={<IconRanking />}
            title={<Title h={3}>quality</Title>}
          >
            <p className={styles.text}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </InfoBlock>
        </div>
      </Container>
    </section>
  );
}
