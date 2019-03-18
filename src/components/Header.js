import React from "react";
import logo from "../images/logo.svg";

const Header = () => (
  <header className="container mx-auto px-4 pt-4 lg:px-8 lg:pt-8 flex-no-shrink">
    <div className="flex items-center justify-between">
      <a href="/">
        <h1 className="sr-only">BudgetDuo</h1>
        <img src={logo} alt="BudgetDuo" aria-hidden="true" />
      </a>
      <ul className="list-reset">
        <li>
          <span className="mr-2 text-white italic hidden lg:inline-block">
            Sign in to save
          </span>
          <button className="signin inline-block rounded py-2 px-4 bg-teal no-underline text-blue-dark hover:bg-teal-light">
            Sign in
          </button>
        </li>
        <li className="hidden">
          <span
            id="notification"
            className="animated mr-2 text-white italic inline-block hidden"
          />
          <button className="signout inline-block text-teal py-2 px-4 border-2 rounded hover:border-teal-light hover:text-teal-light font-bold no-underline">
            Sign out
          </button>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
