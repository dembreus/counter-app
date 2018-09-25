import React, { Component, Fragment } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            {" "}
            <div className="btn-group  m-2">
              {" "}
              <button
                onClick={() => onIncrement(counter)}
                className="btn btn-secondary btn-sm "
              >
                +
              </button>
              <button
                onClick={() => onDecrement(counter)}
                className="btn btn-secondary btn-sm"
                disabled={counter.value === 0 ? "disabled" : ""}
              >
                -
              </button>
            </div>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm"
            >
              x
            </button>
          </div>
        </div>
      </Fragment>
    );
  }

  disableButton = () => {
    let classes = "btn btn-secondary btn-sm decrement ";
    classes += this.props.counter.value === 0 ? "disabled" : "";
    return classes;
  };

  getBadgeClasses = () => {
    let classes = "badge counter-badge badge-pill m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Out of stock" : `${value}`;
  };
}

export default Counter;
