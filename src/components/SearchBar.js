import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    onSubmit(term);
  };
  //Handle change when typing the value in the search inbox
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <div>
          <input value={term} onChange={handleChange} type="text" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
