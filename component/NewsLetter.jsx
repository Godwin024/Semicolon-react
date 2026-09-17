import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <>
      <section className={styles.newsletterSect}>
        <div className={styles.newsletter}>
          <h2 className={styles.title}>Hear From Our Town Crier</h2>

          <p>
            Subscribe to our newsletter to stay connected to our activities, get
            insights and updates on what's happening in our community!
          </p>

          <div className={styles.flexForm}>
            <input type="text" placeholder="Enter your full name" />

            <input type="text" placeholder="Enter your email address" />

            <button className={styles.mainButton}>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
