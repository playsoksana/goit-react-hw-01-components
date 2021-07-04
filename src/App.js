import React from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';


const App = () => 
<Layout>
<Profile data={user}/>
 <Statistics data={statisticalData}/>    
</Layout>;


export default App;
