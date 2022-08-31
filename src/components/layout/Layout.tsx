import { FC, ReactNode } from 'react';
import { Header, SideNav } from './';

import styles from 'styles/layout/layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <SideNav />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
