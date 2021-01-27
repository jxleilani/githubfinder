import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    //if search text is blank, set alert
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      //take the text that's submitted and call API to search for a user
      //pass this.state.text up to App.js
      searchUsers(text);
      //reset input field to nothing
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        {/* <form onSubmit={this.onSubmit.bind(this)} className="form"> */}
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        <div className="test"></div>
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
