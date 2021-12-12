import React, { Component } from "react";
import "./FilterComponent.css";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="filter-div">
        <p>My Recent Searches</p>
        <p>Filter By:</p>
        <p>Budget</p>
        <input
          type="checkbox"
          id="fixedPriceCheckBox"
          name="fixedPriceCheckBox"
        />
        <label for="fixedPriceCheckBox"> Fixed Price Projects</label>
        <br />
        <div className="fixed-price-input-div">
          <input
            type="number"
            min="0"
            className="input-number"
            placeholder="min"
          />
          <p className="to-text">to</p>
          <input
            type="number"
            min="0"
            className="input-number"
            placeholder="max"
          />
        </div>
      </div>
    );
  }
}

export default FilterComponent;
