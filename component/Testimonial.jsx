import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <>
      <section class={styles.testimonials}>
        <div class={styles.testimonialBox}>
          <div class={styles.line}></div>
          <div class={styles.testimonial}>
            <p>
              “I don’t know how much I’d have done or achieved without Semicolon
              Ventures. They build and grow with you until you are able to stand
              on your own.”
            </p>
            <small>Nelson Gray</small>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
