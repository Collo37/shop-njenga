const BackDrop = ({ clicked }) => {
  return (
    <div
      onClick={clicked}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 40,
      }}
    />
  );
};

export default BackDrop;
