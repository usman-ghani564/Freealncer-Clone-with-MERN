import React from "react";
import JobRowComponent from "./JobRow";

function JobsComponent(props) {
  const data = props.jobs;

  return (
    <div>
      {data.map((val) => {
        return (
          <div class="row">
            <JobRowComponent job={val} />
          </div>
        );
      })}
    </div>
  );
}

export default JobsComponent;
