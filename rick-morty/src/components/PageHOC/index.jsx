/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useWindowSize } from '../../hooks';
import './PageHOC.css';

const PageHOC = (Component) => () => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  );
  const [toggle, setToggle] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    document.body.className = `${theme}-theme`;
    const getTheme = () => {
      window
        .matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', (event) => setTheme(event.matches ? 'light' : 'dark'));
    };

    return () => {
      getTheme();
    };
  }, [theme]);

  const themeHandler = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleHandler = () => setToggle(!toggle);

  return (
    <>
      <header className="l-header" name="header">
        <nav className="nav bd-container">
          <NavLink to="/" className="nav__logo">
            Rick & Morty
          </NavLink>

          <div className={toggle ? 'show-menu nav__menu' : 'nav__menu'}>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav__link ${isActive ? 'active' : undefined}`}>
                  Characters
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/episode"
                  className={({ isActive }) => `nav__link ${isActive ? 'active' : undefined}`}>
                  Episode
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/location"
                  className={({ isActive }) => `nav__link ${isActive ? 'active' : undefined}`}>
                  Location
                </NavLink>
              </li>

              <li className="change-theme" onClick={themeHandler}>
                <i className={`bx bxs-toggle-${theme === 'dark' ? 'right' : 'left'}`} />
              </li>
            </ul>
          </div>

          {width <= 768 && (
            <span onClick={toggleHandler}>
              <i className={`bx bx-grid-alt ${theme === 'dark' ? 'white' : undefined}`} />
            </span>
          )}
        </nav>
      </header>

      <main>
        <Component />
      </main>

      <footer className="footer">
        <p>Made with ❤️ by Mamadou</p>
      </footer>
    </>
  );
};

export default PageHOC;
