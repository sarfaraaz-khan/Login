import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css"
class Navbar extends React.Component {
  render() {
    return (
      <>
      <navbar>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Assignment
          </Link>

          <Link to="/" className="navbar-brand"></Link>
        </nav>
        </navbar>
      </>
    );
  }
}
export default Navbar;