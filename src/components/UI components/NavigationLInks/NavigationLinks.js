import "./style.css";

const NavigationLink = ({ item, clicked, mouseOver }) => {
  return (
    <p className="navigation-link" onClick={clicked} onMouseOver={mouseOver}>
      {item.name}
    </p>
  );
};

export default NavigationLink;
