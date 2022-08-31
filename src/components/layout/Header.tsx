import { FC, useState } from 'react';
import { menus } from 'lib/data';
import { Menu } from 'components/atoms';
import { useBreakPoint } from 'hooks/useBreakPoint';

import styles from 'styles/layout/header.module.scss';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const { mobile, tablet, desktop } = useBreakPoint();

  const openDrawer = () => {
    if (mobile && open) return true;
    if (tablet || desktop) return true;
  };

  return (
    <header className={styles.header}>
      <div onClick={() => setOpen(!open)} className={styles.header__hamberger}>
        <div className={open ? styles.header__line1_checked : styles.header__line1} />
        <div className={open ? styles.header__line2_checked : styles.header__line2} />
        <div className={open ? styles.header__line3_checked : styles.header__line3} />
      </div>
      {openDrawer() && (
        <nav className={mobile ? styles.header__nav_sp : styles.header__nav_pc}>
          <ul className={mobile ? styles.header__links_sp : styles.header__links_pc}>
            {menus.map((menu) => (
              <li key={menu.label} className={mobile ? styles.header__list_sp : styles.header__list_pc}>
                <Menu label={menu.label} path={menu.path} className={styles.header__link} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
