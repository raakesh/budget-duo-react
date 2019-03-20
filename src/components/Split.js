import React from "react";

const Split = props => (
  <ul id="split" className="list-reset">
    <li className="block mb-3 flex">
      <input
        type="radio"
        name="split"
        value="income"
        className="radio mr-2 flex-none"
        id="split-income"
        checked={props.value === "income"}
        onChange={event => props.updateSplit(event.target.value)}
      />
      <label htmlFor="split-income" className="cursor-pointer">
        <span className="font-bold">Based on income</span>
        <p className="text-sm">
          The amount you and your partner owe for shared expenses is
          proportional to the total income you each contribute to your shared
          household.
        </p>
      </label>
    </li>
    <li className="block mb-3 flex">
      <input
        type="radio"
        name="split"
        value="half"
        className="radio mr-2 flex-none"
        id="split-half"
        checked={props.value === "half"}
        onChange={event => props.updateSplit(event.target.value)}
      />
      <label htmlFor="split-half" className="cursor-pointer">
        <span className="font-bold">50/50 split</span>
        <p className="text-sm">
          Your shared expenses are split in half for you and your partner.{" "}
          <span className="italic">
            When using this method, your income is irrelevant.
          </span>
        </p>
      </label>
    </li>
    <li className="block flex">
      <input
        type="radio"
        name="split"
        value="adhoc"
        className="radio mr-2 flex-none"
        id="split-adhoc"
        checked={props.value === "adhoc"}
        onChange={event => props.updateSplit(event.target.value)}
      />
      <label htmlFor="split-adhoc" className="cursor-pointer">
        <span className="font-bold">Grab bag method</span>
        <p className="text-sm">
          Designate who will be responsible for each bill using the dropdown
          menu next to each expense.{" "}
          <span className="italic">
            When using this method, your income is irrelevant.
          </span>
        </p>
      </label>
    </li>
  </ul>
);

export default Split;
