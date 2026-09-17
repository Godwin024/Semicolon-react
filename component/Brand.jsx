import styles from "./Brand.module.css";

const Brands = () => {
  return (
    <>
      <section className={styles.brands}>
        <p className={styles.title}>
          Global Brands that trust <span className={styles.colored}>Us</span>
        </p>

        <div className={styles.brandLogos}>
          <img src="/britishcouncil.svg" alt="British Council" />
          <img src="/airtel.svg" alt="Airtel" />
          <img src="/branch.svg" alt="Branch" />
          <img src="/cowrywise.svg" alt="Cowrywise" />
          <img src="/eatngo.svg" alt="Eat N Go" />
          <img src="/fcmb.svg" alt="FCMB" />
          <img src="/flutterwave.svg" alt="Flutterwave" />
          <img src="/fsi.svg" alt="FSI" />
          <img src="/henley.svg" alt="Henley" />
          <img src="/huawei.svg" alt="Huawei" />
          <img src="/ihs.svg" alt="IHS" />
          <img src="/interswitch.svg" alt="Interswitch" />
          <img src="/kpmg.svg" alt="KPMG" />
          <img src="/karaabo.png" alt="Karaabo" />
          <img src="/lagosbusiness.svg" alt="Lagos Business" />
          <img src="/learnspace.svg" alt="Learnspace" />
          <img src="/liberty.svg" alt="Liberty" />
          <img src="/moniepoint.svg" alt="Moniepoint" />
          <img src="/mutual.svg" alt="Mutual" />
          <img src="/prudential.svg" alt="Prudential" />
          <img src="/stanbic.svg" alt="Stanbic" />
          <img src="/sterling.svg" alt="Sterling" />
          <img src="/uba.svg" alt="UBA" />
          <img src="/un.svg" alt="United Nations" />
          <img src="/union.svg" alt="Union" />
          <img src="/wellpass.svg" alt="Wellpass" />
          <img src="/wema.svg" alt="Wema" />
        </div>
      </section>
    </>
  );
};

export default Brands;
