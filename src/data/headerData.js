export const menuItems = [
  {
    name: "Home",
    id: 1,
  },
  {
    name: "Contact",
    id: 2,
  },
  {
    name: "Categories",
    id: 3,
  },
];

export const searchBarFormSubmitHandler = (event, searchTerm, searchbar) => {
  event.preventDefault();
  searchbar.current.value = "";
  console.log("Form submitted", searchTerm);
};
