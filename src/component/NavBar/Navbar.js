
import React from 'react'
import { Link } from 'react-router-dom'
import {Logo, NavbarSection ,LogoText ,UlList,ListItem, Linkk,Container} from './NavbarStyle'


 const Navbar  = () => {
  return (

    <NavbarSection>
    <Container>
        <Logo>
            <LogoText>React Tutorial</LogoText>
        </Logo>
        
        <UlList>
            <ListItem>
              <Link to = '/'>
                <Linkk>Home</Linkk>
              </Link>
            </ListItem>

            <ListItem>
              <Link to = '/DataAPI'>
                <Linkk>API</Linkk>
              </Link>
            </ListItem>

            <ListItem>
              <Link to = '/AboutUs'>
                <Linkk>Redux</Linkk>
              </Link>
            </ListItem>
        </UlList>
        
    </Container>
    
</NavbarSection>
  )
}


export default Navbar

