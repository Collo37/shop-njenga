const FlashCardLogic = () => {
  const showItem = (item) => {
    console.log(`${item} was clicked`);
  };
  return {
    showItem,
  };
};

export default FlashCardLogic;
