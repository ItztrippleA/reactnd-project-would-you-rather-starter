import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "@material-ui/icons";

const Header = ({ authedUser, users }) => (
  <header>
    <nav className=" #263238 blue-grey darken-4">
      <div className="container">
        <div className="nav-wrapper">
          <a data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/add">NEW QUESTION</Link>
            </li>
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              {authedUser === null ? (
                <h3 className="waves-effect">Login</h3>
              ) : (
                <span>
                  <img
                    className="avatar"
                    src={users[authedUser].avatarURL}
                    alt=""
                  />
                  <span className="hide-on-med-and-down">
                    {users[authedUser].name}
                  </span>
                  <Link
                    className="waves-effect waves-light btn #263238 blue-grey darken-4"
                    to="/logout"
                  >
                    LOGOUT
                    <i className="material-icons right">account_circle</i>
                  </Link>
                </span>
              )}
            </li>
          </ul>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/add">NEW QUESTION</Link>
            </li>
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Header);
