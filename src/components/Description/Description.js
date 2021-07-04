import React from 'react';
import PropTypes from 'prop-types';


const Description = ({userName, tag, avatar, location}) => 
<div className="description">
    
<img
  src={avatar}
  alt="Аватар пользователя"
  className="avatar"
/>
<p className="name">{userName}</p>
<p className="tag">{tag}</p>
<p className="location">{location}</p>
</div>;


Description.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
}

Description.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default Description; 