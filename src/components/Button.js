const Button = ({ color, text }) => {
  const triggerClick = (e) => {
    console.log(e);
  };
  return (
    <button
      onClick={triggerClick}
      style={{
        backgroundColor: color,
      }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
