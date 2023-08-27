import { Link } from "react-router-dom";
import "./menu.scss";

function Menu() {
  return (
    <div>
      <div className="menu">
        <div className="item">
          <span className="title">Main</span>

          <Link to="/" className="listItem">
            <img src="/home.svg" alt=""></img>
            <span className="listItemTitle">Home</span>
          </Link>

          <Link to="/" className="listItem">
            <img src="/profile.svg" alt=""></img>
            <span className="listItemTitle">Profile</span>
          </Link>
        </div>

        <div className="item">
          <span className="title">Main2</span>

          <Link to="/" className="listItem">
            <img src="/home.svg" alt=""></img>
            <span className="listItemTitle">Home2</span>
          </Link>

          <Link to="/" className="listItem">
            <img src="/profile.svg" alt=""></img>
            <span className="listItemTitle">Profile2</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
