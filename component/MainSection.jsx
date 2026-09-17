import styles from "./Main.module.css";
import MainBox from "./MainBox";
import boxData from "../data/data";

const MainSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <h1>Accelerating Africa's Digital Transformation</h1>

          <small>
            We are on a mission to empower African talent and drive digital
            innovation across the continent.
          </small>

          <div className={styles.buttons}>
            <a className="main-button" href="#">
              For Individuals
            </a>
            <a className={styles.outlineButton} href="#">
              For Businesses
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/hero-gif.gif" alt="hero-gif" />
        </div>
      </section>

      <section className={styles.whatWeDo}>
        <h3 className={styles.title}>
          What <span className="colored">We</span> Do
        </h3>

        <div className={styles.boxes}>
          {boxData.map((box) => (
            <MainBox
              key={box.id}
              img={box.imgSrc}
              desi={box.desi}
              span={box.span}
              desc={box.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MainSection;
