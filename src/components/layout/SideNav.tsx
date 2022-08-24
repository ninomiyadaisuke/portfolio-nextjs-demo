import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

import styles from 'styles/layout/sideBar.module.scss';

const SideNav: FC = () => {
  return (
    <aside className={styles.sideNav}>
      <div className={styles.sideNav__container}>
        <div className={styles.sideNav__logo}>
          <Image src={'/logo-01.jpg'} height={100} width={100} />
        </div>
        <ul>
          <Link href={'#'}>
            <a>
              <ImFacebook />
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <AiOutlineTwitter />
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <AiOutlineInstagram />
            </a>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
