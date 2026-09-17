import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <section className={styles.navSection}>
        <nav className={styles.navbar}>
          <div className={styles.logoBox}>
            <img
              className={styles.logoImg}
              src="./logo.svg"
              alt="Semicolon logo"
            ></img>
          </div>

          <ul className={styles.navLinks}>
            <li>
              <Link to="/Individuals" className={styles.Link}>
                Individuals
              </Link>
            </li>
            <li>
              <Link to="/Businesses" className={styles.Link}>
                Businesses
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className={styles.Link}>
                About us
              </Link>
            </li>

            <li>
              <Link to="/Careers" className={styles.Link}>
                Careers
              </Link>
            </li>

            <li>
              <Link to="/Impact" className={styles.Link}>
                Impact
              </Link>
            </li>

            <Link
              className={styles.outlineButton}
              to="#apply.semicolon.africa"
              id="join-btn"
            >
              Join Talent Pool
            </Link>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
