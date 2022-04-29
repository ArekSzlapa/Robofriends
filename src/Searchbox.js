const Searchbox = ({ box, onChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue"
        type="text"
        placeholder="Search robots..."
        value={box}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbox;
