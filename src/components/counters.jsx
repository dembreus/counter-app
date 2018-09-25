import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div className="container">
        <div className="row ">
          <div className="col-12">
            {" "}
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">
              Reset
            </button>
          </div>
          {counters.map(counter => (
            <div className="col-12 counter-badge">
              {" "}
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
