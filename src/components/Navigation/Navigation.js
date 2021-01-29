import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home page
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/phone-book"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Phone book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
