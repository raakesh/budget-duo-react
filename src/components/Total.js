import React, { Component } from "react";
import { formatCurrency } from "../helpers";

class Total extends Component {
  state = {
    isHidden: true
  };

  componentDidMount() {
    if (this.props.show) {
      this.toggleHidden();
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const {
      color,
      item,
      totalIncome,
      totalExpenses,
      totalIndividualExpenses,
      split
    } = this.props;
    const { name, amount } = item;
    const backgroundStyle = {
      backgroundColor: color
    };

    let percentage;
    switch (split) {
      case "half":
        percentage = 0.5;
        break;
      case "adhoc":
        percentage = totalIndividualExpenses / totalExpenses || 0;
        break;
      default:
        percentage = amount / totalIncome || 0;
    }

    return (
      <div className={name === "Total" ? "" : "border-b"}>
        <button className="w-full" onClick={this.toggleHidden}>
          <div className="row flex-wrap no-underline text-grey">
            <div className="col flex-1 flex items-center">
              {name === "Total" ? (
                <span className="font-bold">{name}</span>
              ) : (
                <>
                  <div
                    className="flex-none rounded-full w-3 h-3 mr-2"
                    style={backgroundStyle}
                  />
                  {name}
                </>
              )}
            </div>
            <div className="col w-1/5 text-right font-bold">
              <span className="row-share">
                {(percentage * 100).toFixed(0) || 0}%
              </span>
            </div>
            <div className="col w-1/2 flex items-center justify-end text-right">
              <div className="truncate">
                <span className="font-bold">
                  {formatCurrency.format(percentage * totalExpenses)}
                </span>
                /mo
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="open ml-2 text-teal stroke-current h-4 w-4 pointer-events-none"
              >
                {this.state.isHidden ? (
                  <>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </>
                ) : (
                  <line x1="5" y1="12" x2="19" y2="12" />
                )}
              </svg>
            </div>
            {!this.state.isHidden && (
              <ul className="details col list-reset mt-2 mr-6 w-full text-right text-sm">
                <li className="py-1">
                  {formatCurrency.format(
                    (percentage * totalExpenses * 12) / 26
                  )}
                  / bi-weekly
                </li>
                <li className="py-1">
                  {formatCurrency.format(
                    (percentage * totalExpenses * 12) / 24
                  )}
                  / bi-monthly
                </li>
                <li className="py-1">
                  {formatCurrency.format(percentage * totalExpenses * 12)}/
                  annually
                </li>
              </ul>
            )}
          </div>
        </button>
      </div>
    );
  }
}

export default Total;
