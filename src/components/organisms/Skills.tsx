import { FC } from 'react';

import styles from 'styles/organisms/skills.module.scss';

const Skills: FC = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__group}>
        <h3>Design Skills</h3>
        <h4>Web Design</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_1}></span>
        </div>
        <h4>Print Design</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_2}></span>
        </div>
        <h4>Logo Design</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_3}></span>
        </div>
        <h4>Graphic Design</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_4}></span>
        </div>
      </div>

      <div className={styles.skills__group}>
        <h3>Coding Skills</h3>
        <h4>HTML / CSS</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_5}></span>
        </div>

        <h4>JavaScript</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_6}></span>
        </div>

        <h4>Python</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_7}></span>
        </div>

        <h4>SQL</h4>
        <div className={styles.skills__progress}>
          <span className={styles.skills__progress_8}></span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
