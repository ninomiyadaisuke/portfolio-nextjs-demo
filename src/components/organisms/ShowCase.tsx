import { FC } from 'react';
import Link from 'next/link';

import styles from 'styles/organisms/showCase.module.scss';

const ShowCase: FC = () => {
  return (
    <section className={styles.showCase}>
      <div className={styles.showCase__content}>
        <h1>Scarlett Tyler</h1>
        <p>UX Designer / Frontend Developer</p>
        <Link href={'/'}>
          <a className={styles.showCase__link}>My Work</a>
        </Link>
      </div>
    </section>
  );
};

export default ShowCase;
