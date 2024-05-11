import React from 'react';
import PropTypes from 'prop-types';

// Листинг 3.6. Передача свойств от родителя к потомку

const UserProfile = props => {
  return <img src={`https://source.unsplash.com/user/${props.username}`} alt="Фото пользователя"/>;
};
UserProfile.propTypes = {
  username: PropTypes.string.isRequired
};

const UserProfileLink = props => {
  return <a href={`https://ifelse.io/${props.username}`}>{props.username}</a>
};
UserProfileLink.propTypes = {
  username: PropTypes.string.isRequired
};

const UserCard = props => {
  return (
    <div>
      <UserProfile username={props.username}/>
      <UserProfileLink username={props.username}/>
    </div>
  );
};
UserCard.propTypes = {
  username: PropTypes.string.isRequired
};
UserCard.defaultProps = {
  username: 'erondu'
};

export default UserCard;
