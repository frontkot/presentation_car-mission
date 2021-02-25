import React from 'react';
import "./User.scss"

const User = ({
  name, photo
}) => (
  <div className="user__container">
    <h2 className="user__name">{name}</h2>
    <img src={photo} className="user__photo"/>
  </div>
);

export default User;