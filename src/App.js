import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Container from './components/Container/Container';
import Header from './components/Header/Header';


const App = () => 
<>
<Header/>
<Container>
<Profile data={user}/>;   
</Container>
</>
export default App;
