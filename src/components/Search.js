import React, { useState } from "react";
import NewsList from "./NewsList";

export default function Search() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search News..."
          onChange={e => handleChange(e)}
        />
      </div>
      <NewsList search={search}></NewsList>
    </div>
  );
}
