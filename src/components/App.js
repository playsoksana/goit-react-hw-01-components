import React from 'react';


import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactionsData from '../data/transactions.json';

import { Section } from './Section/Section';
import Profile from './Profile/Profile';
import Layout from './Layout/Layout';
import Statistics from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { Transactions } from './Transactions/Transactions';



const App = () => 
    <Layout>
        <Section><Profile userLocation={user.location} userAvatar={user.avatar } userTag={user.tag } userName={user.name} userStatsFollowers={user.stats.followers} userStatsViews={user.stats.views } userStatsLikes={user.stats.likes}/></Section>
        <Section><Statistics data={statisticalData} /></Section>
    <Section><FriendsList friendsList={friends} /></Section>
    <Section><Transactions transactions={transactionsData }/></Section>
        
        
    </Layout>;


export default App;
