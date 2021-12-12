import React from "react";

function SearchComponent(props) {
  const callback = props.callback;
  return (
    <div class="mb-3">
      <input
        type="text"
        placeholder="Search Job"
        onChange={(event) => {
          callback({
            search_value: event.target.value,
          });
        }}
      ></input>
    </div>
  );
}

export default SearchComponent;
