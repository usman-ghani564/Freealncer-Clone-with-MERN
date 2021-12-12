import React, { Component } from "react";
import FilterComponent from "./FilterComponent";
import "./BaseComponent.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchComponent from "./Search_Compnent";
import JobsComponent from "./Jobs_Component";
import axios from "axios";

class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    console.log("inside Constructor");
  }

  render() {
    let jobcomp;
    if (this.state.data.length === 0) {
      jobcomp = <div></div>;
    } else {
      jobcomp = <JobsComponent jobs={this.state.data}></JobsComponent>;
    }

    return (
      <div className="Container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <FilterComponent />
          </div>
          <div class="col-8">
            <div class="row">
              <SearchComponent></SearchComponent>
              {jobcomp}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    // write code to fetch data from server
    axios({
      url: "http://localhost:3001/getJobs",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default BaseComponent;
