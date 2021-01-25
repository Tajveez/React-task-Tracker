import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button color="blue" text="Add+" />
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
