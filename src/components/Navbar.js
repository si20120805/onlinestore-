import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import styled  from 'styled-components'

const Container=styled.div`
height:60px;
background-color:black;

`
const Wrapper=styled.div`
padding:10px 20px ;
display:flex;
justify-content:space-between;
align-items:center;

`
const Left=styled.div`

flex:1;
display:flex;
align-items:center;
`
const Language=styled.span`

font-size:14px;
cusrsor:pointer;

`
const Searchcontainer=styled.div`
border: 0.5px solid lightgreay;
display:flex;
align-items:center;
margin-left:25px;
padding:5px


`
const Input=styled.input`
border:none;


`
const Logo=styled.h1`
    font-weight:bold;


`




const Center=styled.div`
text-align:center;
flex:1;

`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;

`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;



`

export const Navbar = () => {
  return (
    <Container>
 Navbar
        <Wrapper>
            <Left>
              <Language>English</Language>
              <Searchcontainer>
                <Input/> 
                <SearchIcon style={{color:'gray',fontSize:'16px'}}/>
              </Searchcontainer>


            </Left>
            <Center><Logo> LAMA.</Logo></Center>
            <Right>
                 
                <MenuItem>Register</MenuItem>
                <MenuItem>SignIn</MenuItem>
                <MenuItem>
                
                <Badge color="secondary" badgeContent={99}>
        <AddShoppingCartIcon />
      </Badge>
                
                </MenuItem>
                
                </Right>

       
        </Wrapper>
        
        </Container>
  )
}
