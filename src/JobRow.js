import React, { Component } from "react";
import "./JobRow.css";

class JobRowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="jobs-div">
        <div className="jobs-inner-div">
          <a className="display_prop" href="#">
            {this.props.job.title}
          </a>
          <p>{this.props.job.description}</p>

          <div className="tags-div">
            {this.props.job.tags.map((tag) => {
              return <a href="#">{tag.title}</a>;
            })}
          </div>
        </div>
        <div className="monetary-info-div">
          <p>
            <strong>{this.props.job.price}</strong> Avg Bid
          </p>
          <p>{this.props.job.noOfBids} bids</p>
        </div>
      </div>
    );
  }
}

export default JobRowComponent;
