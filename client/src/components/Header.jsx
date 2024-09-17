import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bagItemsLength = useSelector((store) => store.bagItems.length);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/myntra_logo.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a>Men</a>
        <a>Women</a>
        <a>Kids</a>
        <a>Home & Living</a>
        <a>Beauty</a>
        <a>
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <div className="input-group mb-3" style={{ margin: "10px 0px" }}>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Search
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Find your favorite items..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            <CgProfile />
          </span>
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            <GrFavorite />
          </span>
          <span className="action_name">Wishlist</span>
        </div>

        <div className="action_container">
          <Link to="/bag">
            <span className="material-symbols-outlined action_icon">
              <FaCartShopping />
            </span>
          </Link>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItemsLength}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
