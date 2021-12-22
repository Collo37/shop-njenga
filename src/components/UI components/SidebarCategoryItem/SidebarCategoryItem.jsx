import "./SidebarCategoryItem.css";

const SidebarCategoryItem = ({ item }) => {
  return (
    <div className="sidebar-category-item-container">
      <h4 className="sidebar-category-title">{item.name}</h4>
      {item.categories.map((category, index) => {
        return (
          <p key={index} className="sidebar-category-item">
            {category}
          </p>
        );
      })}
    </div>
  );
};

export default SidebarCategoryItem;
