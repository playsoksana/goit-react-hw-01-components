import React from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';



const Layout = ({children}) => 
 <>
 <Header/>
<Container>{children}</Container>
 </>;


export default Layout;