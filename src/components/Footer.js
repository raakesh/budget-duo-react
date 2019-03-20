import React from "react";
import logo from "../images/mark_knockout.svg";

const Footer = () => (
  <footer className="bg-smoke p-8 flex-no-shrink">
    <div className="container mx-auto text-sm text-white text-center">
      <img src={logo} alt="" className="w-8 mb-4" />
      <p className="mb-4">
        A project by{" "}
        <a
          href="https://bhurst.me"
          className="text-white font-bold no-underline"
        >
          @hursey013
        </a>{" "}
        and{" "}
        <a
          href="http://rtwell.com"
          className="text-white font-bold no-underline"
        >
          @rtwell
        </a>
      </p>
      <ul className="list-reset flex mb-4 justify-center">
        <li className="mx-2">
          <a href="mailto:hello@budgetduo.com" className="text-white font-bold">
            Contact
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://github.com/hursey013/budget-duo"
            className="text-white font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className="mb-4">&copy; 2019 BudgetDuo</p>
    </div>
  </footer>
);

export default Footer;
