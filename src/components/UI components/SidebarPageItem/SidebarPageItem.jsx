import "./SidebarPageItem.css";

const SidebarPageItem = ({ name, clicked }) => {
  return (
    <div className="sidebar-menu-item" onClick={clicked}>
      <p>{name}</p>
    </div>
  );
};

export default SidebarPageItem;
