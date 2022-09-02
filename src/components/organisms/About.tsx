import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/organisms/about.module.scss';

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__image}>
        <Image src={'/content-img-02.jpg'} width={400} height={480} objectFit={'cover'} layout={'responsive'} />
      </div>
      <div className={styles.about__content}>
        <h2>About Me</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium maiores aliquid magni debitis
          ipsum delectus impedit iure distinctio, sint tempora asperiores odit tempore temporibus incidunt, non ex
          expedita sunt.
        </p>
        <Link href={'/'}>
          <a className={styles.about__link}>Read More</a>
        </Link>
      </div>
    </section>
  );
};

export default About;
