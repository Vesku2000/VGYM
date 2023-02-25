import { useState } from 'react';
import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Treeni päiväkirja</div>
      <nav>
        <div className={classes.hamburger} onClick={toggleMenuHandler}>
          <div className={`${classes.bar} ${isMenuOpen ? classes.close : ''}`} />
          <div className={`${classes.bar} ${isMenuOpen ? classes.close : ''}`} />
          <div className={`${classes.bar} ${isMenuOpen ? classes.close : ''}`} />
        </div>
        <ul className={`${classes.navItems} ${isMenuOpen ? classes.show : ''}`}>
          <li>
            <Link href='/'>Kaikki Treenit</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Lisää uusi treeni</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
