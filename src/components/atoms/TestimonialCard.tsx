import { FC } from 'react';
import Image from 'next/image';

import styles from 'styles/atoms/testimonialCard.module.scss';

type Props = {
  title: string;
  text: string;
  path: string;
};

const TestimonialCard: FC<Props> = (props) => {
  const { title, text, path } = props;

  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCard__image}>
        <Image src={path} height={310} width={500} layout={'responsive'} objectFit={'cover'} />
      </div>
      <div className={styles.testimonialCard__content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
