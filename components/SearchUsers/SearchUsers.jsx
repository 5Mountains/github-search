import React, { useState } from "react";
import { getGitHubUsers } from "../../data/gitHubUsers";
import { User } from "../User/User";
import "./SearchUsers.scss";

export const SearchUsers = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
    setIsError(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!username) {
      setIsError(true);

      return
    }

    if (username) {
      const getUsers = async() => {
        const result = await getGitHubUsers(username);
    
        setUsers(result.items);
      };
  
      getUsers();
      setUsername('');
    }
  }

  return (
    <div className="search">
      <div className="search__area">

        <div className="search__input-container">
          <input
            type="text"
            className="search__input"
            placeholder="search username here..."
            value={username}
            onChange={onChangeHandler}
          />

          {isError && 
            <span className="search__error">You should type some username</span>
          }
        </div>


        <button
          type="submit"
          className="search__button"
          onClick={onSubmitHandler}
        >
          Search users
        </button>
      </div>

      <User users={users} />
    </div>
  );
};
