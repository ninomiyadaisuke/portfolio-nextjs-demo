import { FC } from 'react';
import { TestimonialCard } from 'components/atoms';
import { cardData } from 'lib/data';

import styles from 'styles/organisms/testimonials.module.scss';

const Testimonials: FC = () => {
  return (
    <section className={styles.testimonials}>
      {cardData.map((data) => (
        <TestimonialCard key={data.title} title={data.title} text={data.text} path={data.path} />
      ))}
    </section>
  );
};

export default Testimonials;
