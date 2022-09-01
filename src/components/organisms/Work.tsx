import { FC } from 'react';
import Image from 'next/image';
import { images } from 'lib/data';

import styles from 'styles/organisms/work.module.scss';

const Work: FC = () => {
  return (
    <section className={styles.work}>
      {images.map((image) => (
        <div className={styles.work__card}>
          <Image src={image.path} height={400} width={400} layout={'responsive'} />
        </div>
      ))}
    </section>
  );
};

export default Work;
