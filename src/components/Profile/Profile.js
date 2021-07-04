import React from 'react';
import StatsList from '../StatsList/StatsList';
import Description from '../Description/Description';

const Profile = ({data}) => 

<div className="profile">  

  <Description 
  userName={data.name}   
  tag= {data.tag}
  avatar = {data.avatar}
  location = {data.location}
  />



<StatsList 
followers={data.stats.followers}
views={data.stats.views}
likes={data.stats.likes}
/>
</div>;

export default Profile;