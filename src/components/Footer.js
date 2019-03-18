import React from "react";

const Footer = () => (
  <footer className="bg-smoke p-8 flex-no-shrink">
    <div className="container mx-auto text-sm text-white text-center">
      <img src="images/mark_knockout.svg" alt="" className="w-8 mb-4" />
      <p className="mb-4">
        A project by{" "}
        <a
          href="https://github.com/hursey013/"
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
          <a href="tos.html" className="text-white font-bold" target="_blank">
            Terms of Service
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://github.com/hursey013/budget-duo"
            className="text-white font-bold"
          >
            Github
          </a>
        </li>
      </ul>
      <p className="mb-4">&copy; 2018 BudgetDuo</p>
    </div>
  </footer>
);

export default Footer;
