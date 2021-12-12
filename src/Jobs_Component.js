import React from "react";
import JobRowComponent from "./JobRow";

function JobsComponent(props) {
  const data = props.jobs;
  const search = props.search;

  const filtered = data;

  let filtered_jobs = filtered.jobs.filter((job) => {
    return job.title.includes(search);
  });

  return (
    <div>
      {filtered_jobs.map((val) => {
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
