import Brands from "../component/Brand";
import Enum from "../component/Enum";
import Footer from "../component/Footer";
import FooterMenu from "../component/FooterMenu";
import Header from "../component/Header";
import MainSection from "../component/MainSection";
import NewsLetter from "../component/NewsLetter";
import Socials from "../component/Social";
import Testimonial from "../component/Testimonial";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Enum />
      <Brands />
      <Testimonial />
      <NewsLetter />
      <Socials />
      <FooterMenu />
      <Footer />
    </>
  );
};

export default App;
