import React from "react";
import PropTypes from "prop-types"; 
import "./User.scss";

export const User = ({ users }) => (
  <ul className="users__list users">
    {users.map(user => (
      <li key={user.id} className="user__item user">

        <a href={user.html_url} className="user__link">
          <div className="user__img-container">
            <img 
              src={user.avatar_url} 
              alt={`${user.login} user`} 
              className="user__img"  
            />
          </div>
        </a>
        
        <p className="user__text">{user.login}</p>
      </li>
    ))}
  </ul>
);

User.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      html_url: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
  )
};

User.defaultProps  = {
  users: [],
};