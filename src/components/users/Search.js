import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    //if search text is blank, set alert
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      //take the text that's submitted and call API to search for a user
      //pass this.state.text up to App.js
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
