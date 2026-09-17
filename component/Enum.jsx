import styles from "./Enum.module.css";

const Enum = () => {
  return (
    <>
      {/* enum learn more section */}
      <section className={styles.learnMore}>
        <img className={styles.learnImg} src="/enum.svg" alt="enum logo" />

        <div className={styles.learnMoreImgs}>
          <img src="/hire.svg" alt="virtual meeting" />
          <img src="/learn.svg" alt="remote-work" />
          <img src="/train.svg" alt="board meetings" />
        </div>

        <div className={styles.learnField}>
          <p className={styles.title}>
            Learn, Hire, & Train in One{" "}
            <span className={styles.biroBlue}>Place</span>.
          </p>

          <p className={styles.subText}>
            Enum is the platform that grants you access to opportunities in the
            future of work and learning. Acquire in-demand skills, get matched
            with employers, hire qualified talent, manage virtual training, and
            monetise your training program in one place.
          </p>

          <a
            href="#/learn-more-about-enum-verse"
            className={`${styles.button} ${styles.learnBtn}`}
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default Enum;
