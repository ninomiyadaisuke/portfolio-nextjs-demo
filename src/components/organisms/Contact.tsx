import { FC } from 'react';

import styles from 'styles/organisms/contact.module.scss';

const Contact: FC = () => {
  return (
    <section className={styles.contact}>
      <form className={styles.contact__form}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
