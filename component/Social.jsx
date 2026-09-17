import styles from "./Social.module.css";

const Socials = () => {
  return (
    <>
      <section className={styles.socials}>
        <p className={styles.socialText}>Follow Us</p>

        <div className={styles.socialFlex}>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#">
                <img src="/facebook.svg" alt="Facebook" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/twitter.svg" alt="Twitter" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/tiktok.svg" alt="TikTok" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/instagram.svg" alt="Instagram" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/medium.svg" alt="Medium" />
              </a>
            </li>
          </ul>

          <div>
            <img src="/semicolon.svg" alt="Semicolon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Socials;
