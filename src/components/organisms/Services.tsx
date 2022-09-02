import { FC } from 'react';

import { FaQuidditch, FaTasks, FaPaintRoller, FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';

import styles from 'styles/organisms/services.module.scss';

const Services: FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__service}>
        <span>
          <FaQuidditch />
        </span>

        <h3>UI Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi, atque deserunt iste ipsa odit!</p>
      </div>

      <div className={styles.services__service}>
        <span>
          <FaTasks />
        </span>

        <h3>Web Development</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi, atque deserunt iste ipsa odit!</p>
      </div>
      <div className={styles.services__service}>
        <span>
          <AiOutlineMobile />
        </span>

        <h3>App Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi, atque deserunt iste ipsa odit!</p>
      </div>
      <div className={styles.services__service}>
        <span>
          <FaPaintRoller />
        </span>

        <h3>Type Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi, atque deserunt iste ipsa odit!</p>
      </div>
      <div className={styles.services__service}>
        <span>
          <TbEdit />
        </span>

        <h3>Blog Writer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi, atque deserunt iste ipsa odit!</p>
      </div>
      <div className={styles.services__service}>
        <span>
          <FaProjectDiagram />
        </span>

        <h3>Project Management</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi, atque deserunt iste ipsa odit!</p>
      </div>
    </section>
  );
};

export default Services;
