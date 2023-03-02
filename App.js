import React from "react";
import useBooksSearch from "./useBooksSearch";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  const { loading, hasMore, error, books } = useBooksSearch(query, pageNumber);
  return (
    <div>
      <input type="text" onChange={handleSearch} />
      {books &&
        books.map((book) => {
          return <div key={book}>{book}</div>;
        })}
      <div> {loading && "Loading ..."} </div>
      <div> {error && "Error"} </div>
    </div>
  );
}

export default App;
