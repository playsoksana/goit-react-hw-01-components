import React from 'react';


import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactionsData from './data/transactions.json';

import { Section } from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import { FriendsList } from './components/FriendsList/FriendsList';
import { Transactions } from './components/Transactions/Transactions';



const App = () => 
    <Layout>
       <Section><Profile data={user} /></Section>
        <Section><Statistics data={statisticalData} /></Section>
    <Section><FriendsList friendsList={friends} /></Section>
    <Section><Transactions transactions={transactionsData }/></Section>
        
        
    </Layout>;


export default App;
