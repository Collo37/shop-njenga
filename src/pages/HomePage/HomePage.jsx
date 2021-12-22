import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import ShowCase from "../../components/ShowCase/ShowCase";
import FlashCardContainer from "../../components/FlashCardContainer/FlashCardContainer";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <Slider />
      <Categories />
      <ShowCase />
      <FlashCardContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
