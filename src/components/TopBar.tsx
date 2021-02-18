import * as React from "react";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

export const TopBar = (): ReactElement => {
  const [menuActive, toggleMenu] = useState<boolean>(false);

  const menuClick = (): void => {
    toggleMenu(!menuActive);
  };

  return (
    <div className="header-wrapper" id="home">
      <section className="hero">
        <nav className="navbar is-transparent is-hidden-tablet">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h4 className="subtitle">Reuben & Me.</h4>
            </Link>
            <a
              role="button"
              className={
                "navbar-burger burger navbar" + (menuActive ? " is-active" : "")
              }
              aria-label="menu"
              aria-expanded={menuActive ? "true" : "false"}
              onClick={menuClick}
            >
              <span />
              <span />
              <span />
            </a>
          </div>
          {menuActive ? (
            <div className={"navbar-menu" + (menuActive ? " is-active" : "")}>
              <div className="navbar-end">
                <div className="navbar-item">
                  <Link
                    to="/"
                    className="navbar-item"
                    onClick={(): void => toggleMenu(false)}
                  >
                    Home
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to="/collection/best-sellers"
                    className="navbar-item"
                    onClick={(): void => toggleMenu(false)}
                  >
                    Best Sellers
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to="/collection/accessories"
                    className="navbar-item"
                    onClick={(): void => toggleMenu(false)}
                  >
                    Accessories
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to="/collection/pyjamas"
                    className="navbar-item"
                    onClick={(): void => toggleMenu(false)}
                  >
                    Pyjamas
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to="/collection/coats-&-hoodies"
                    className="navbar-item"
                    onClick={(): void => toggleMenu(false)}
                  >
                    Coats & Hoodies
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to="/contact"
                    className="navbar-item"
                    onClick={(): void => toggleMenu(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </nav>
        <div className="hero-foot is-hidden-mobile">
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <a href="/">
                      <h4 className="subtitle">Reuben & Me.</h4>
                    </a>
                  </li>
                  <li>
                    <h4>
                      <Link to="/collection/best-sellers">Best Sellers</Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Link to="/collection/accessories">Accessories</Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Link to="/collection/pyjamas">Pyjamas</Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Link to="/collection/coats-&-hoodies">
                        Hoodies
                      </Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Link to="/collection/matching-sets">
                        Matching Sets
                      </Link>
                    </h4>
                  </li>
                  <li className="is-grouped-right">
                    <h4>
                      <Link to="/contact">Contact</Link>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
