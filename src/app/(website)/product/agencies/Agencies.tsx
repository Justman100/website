'use client';
import ImageBlock from 'components/layout/ImageBlock';
import SectionHeader from 'components/layout/SectionHeader';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL, Blocks } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';
import useQueryString from 'components/hooks/useQueryString';
import styles from './Agencies.module.css';

const items = [Blocks.maximizeValue, Blocks.focusOnResults, Blocks.protectClientCompliance];

export default function Agencies() {
  const query = useQueryString({ ref: 'umami-agencies' });

  return (
    <div className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Web analytics for results-driven <span className={styles.highlight}>agencies</span>.
            </h1>
            <p>Umami helps agencies deliver exceptional value to clients.</p>
            <LinkButton href={`${CLOUD_URL}/signup${query}`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/agencies.jpg" alt="" />
        </ImageBlock>
      </section>
      <ScrollBlock items={items} />
      <section>
        <SectionHeader>
          <h1>Supporting your value-driven services</h1>
        </SectionHeader>
        <div className={styles.services}>
          <div>SEO / SEM</div>
          <div>Site performance</div>
          <div>Paid media</div>
          <div>Content marketing</div>
          <div>Conversion rate optimization</div>
          <div>Cross-channel marketing</div>
        </div>
      </section>
      <GetStartedBanner />
    </div>
  );
}
