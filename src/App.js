import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Layout from './components/Layout/Layout';


const App = () => 
<Layout>
<Profile data={user}/>   
</Layout>;


export default App;
