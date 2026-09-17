import styles from "./Main.module.css";

const MainBox = ({
  img = "/circle.svg",
  desi = "We help",
  span = "individuals",
  desc = "olodo rabata",
}) => {
  return (
    <>
      <div className={styles.box}>
        <img src={img} alt="alt-left-image" />

        <p>
          {desi} <span className={styles.hero}>{span}</span> {desc}
        </p>
      </div>
    </>
  );
};

export default MainBox;
