import React from 'react';
import { Section } from './components/Section/Section';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import { FriendsList } from './components/FriendsList/FriendsList';



const App = () => 
    <Layout>
       <Section><Profile data={user} /></Section>
        <Section><Statistics data={statisticalData} /></Section>
          <Section><FriendsList friendsList={friends}/></Section>
        
        
    </Layout>;


export default App;
