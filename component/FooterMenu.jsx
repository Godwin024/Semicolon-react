import styles from "./FooterMenu.module.css";

const FooterMenu = () => {
  return (
    <>
      <section class={styles.footerMenu}>
        {/* <!--  first menu links   --> */}
        <ul class={styles.footerLinks}>
          <p>For Businesses</p>
          <a href="#Talent Outsourcing" class={styles.footerLink}>
            Talent Outsourcing
          </a>
          <a href="#Corporate Training" class={styles.footerLink}>
            Corporate Training
          </a>
          <a href="#Project Implementation" class={styles.footerLink}>
            Project Implementation
          </a>
          <a href="#Project Advisory" class={styles.footerLink}>
            Project Advisory
          </a>
        </ul>

        {/* <!--  second menu links   --> */}
        <ul class={styles.footerLinks}>
          <p>For Individuals</p>
          <a href="#Techpreneurship Program" class={styles.footerLink}>
            Techpreneurship Program
          </a>
          <a href="#Data Analytics Program" class={styles.footerLink}>
            Data Analytics Program
          </a>
        </ul>

        {/* <!--  third menu links   --> */}
        <ul class={styles.footerLinks}>
          <p>About Us</p>
          <a href="#Careers" class={styles.footerLink}>
            Careers
          </a>
          <a href="#Stories" class={styles.footerLink}>
            Stories
          </a>
        </ul>

        {/* <!--  fourth menu links   --> */}
        <ul class="footerLinks">
          <p>Contact Us</p>
          <a
            href="#/312, Herbert Macaulay Way, Sabo, Yaba, Lagos"
            class={styles.footerLink}
          >
            312, Herbert Macaulay Way, Sabo, Yaba, Lagos.
          </a>
          <a href="#234814455671" class={styles.footerLink}>
            +234814455671
          </a>
          <a href="#info@semicolon.africa" class={styles.footerLink}>
            info@semicolon.africa
          </a>
        </ul>
      </section>
    </>
  );
};

export default FooterMenu;
