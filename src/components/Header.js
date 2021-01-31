import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClick, formOpen }) => {
  console.log("taj", formOpen);
  let buttonText = formOpen ? "Close" : "Add+";
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button onClick={onClick} color="blue" text={buttonText} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.protoTpyes = {
  title: PropTypes.string,
};

// const headerStyles = {
//     color: 'greenyellow',
//     backgroundColor: 'purple'
// }
export default Header;
