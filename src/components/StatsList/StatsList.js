import React from 'react';
import PropTypes from 'prop-types';


const StatsList = ({followers, views, likes}) => 

<ul className="stats">
<li>
  <span className="label">Followers</span>
  <span className="quantity">{followers}</span>
</li>
<li>
  <span className="label">Views</span>
  <span className="quantity">{views}</span>
</li>
<li>
  <span className="label">Likes</span>
  <span className="quantity">{likes}</span>
</li>
</ul>;


StatsList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired 
};

export default StatsList;