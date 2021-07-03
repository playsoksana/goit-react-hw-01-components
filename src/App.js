import React, { useLayoutEffect } from 'react';
import Profile from './components/Profile';
import user from './user.json';


const App = () => 
<div>
<Profile data={user}/>;   
</div>;


export default App;
