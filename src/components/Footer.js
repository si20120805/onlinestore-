import { Description } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container=styled.div`


`
const Left=styled.div`

felx:1
display:flex;
flex-direction:column;
padding:20px;

`
const Logo=styled.h1``
const Description=styled.p`
margin:20px 0px; 

 `
const Socialcontainer=styled.div`
display:flex;
`
const Socialicon=styled.div`
width:40px;
heigth:40px;
border-radius=50%;
color:white;
background-color:#${props=>props.color};
display:flex;
justify-content:center;
align-items:center;
margin-right:20px;

`


const Center=styled.div`

flex:1
padding:20px;

`

const Title=styled.h3`
margin-bottom:30px;

`

const List=styled.ul`

margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap
`

const Listitem=styled.li`

width:50%;
margin-bottom:10px;
`


const Right=styled.div`
flex:1;
padding:20px;
`

const Contactitem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`


const Footer = () => {
  return (
    <Container>
<Left>
    <Logo>LAMA</Logo>
    <Description>There are many people around there who take </Description>
    <Socialcontainer>

        <Socialicon color='3B5999'>
            <FacebookIcon/>

        </Socialicon>

        <Socialicon  color='3B5999'>
            <InstagramIcon/>

        </Socialicon>

        <Socialicon  color='3B5999'>
            <TwitterIcon/>

        </Socialicon>
    </Socialcontainer>
</Left>
<Center>

<Title>Useful Links</Title>
<List>
    <Listitem>Home </Listitem>
    <Listitem>Cart </Listitem>
    <Listitem>Man Fasion </Listitem>
    <Listitem>Women Fasion </Listitem>
    <Listitem>Acessories </Listitem>
    <Listitem>Terms </Listitem>
</List>



</Center>
<Right>

    <Title>Contact</Title>
    <Contactitem>
        Cuttack sector 10 justice square 
    </Contactitem>

    <Contactitem>
      Phone Number:1234567876
    </Contactitem>

    <Contactitem>
       @contact:Siddharth@gmail.com
    </Contactitem>
</Right>

    </Container>
)}

export default Footer