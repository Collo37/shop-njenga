import "./SlideStyles.css";

const Slide = ({ imageUrl }) => {
  return (
    <div className="slide">
      <img src={imageUrl} alt="slide" />
    </div>
  );
};

export default Slide;
