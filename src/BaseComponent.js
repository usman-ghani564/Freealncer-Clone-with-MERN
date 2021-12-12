import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import "./BaseComponent.css";
import data from "./data/job.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchComponent from "./Search_Compnent";
import JobsComponent from "./Jobs_Component";

function BaseComponent(props) {
  let [objSearch, setSearchString] = useState({
    search_value: "",
  });
  return (
    <div className="Container">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <FilterComponent />
        </div>
        <div class="col-8">
          <div class="row">
            <SearchComponent callback={setSearchString}></SearchComponent>
            <JobsComponent
              jobs={data}
              search={objSearch.search_value}
            ></JobsComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseComponent;
