import ShowCaseItemsContainer from "../ShowCaseItemsContainer/ShowCaseItemsContainer";
import { braList, sportsBraList } from "../../data/bras";
import "./ShowCaseStyles.css";

const ShowCase = () => {
  return (
    <div className="showcase">
      <ShowCaseItemsContainer title="Bras" items={braList} />
      <ShowCaseItemsContainer title="Sports Bras" items={sportsBraList} />
    </div>
  );
};

export default ShowCase;
