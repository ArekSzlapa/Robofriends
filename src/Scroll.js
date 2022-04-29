const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "78vh",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
