import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Treeni päiväkirja</div>
      <nav>
        <ul>
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
