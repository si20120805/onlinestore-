import React from 'react'
import styled from 'styled-components';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';


const Container=styled.div`
heigth:60vh;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
flex-direction:columns;

`
const Tilte=styled.h1`

font-size:70px;
margin-bottom:20px;
`
const Description=styled.div`

font-size:24px;
font-weight:300;
margin-bottom:20px;
`
const Inputcontainer =styled.div`

width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray


`
const  Input=styled.input`
border:none;
flex:8;
padding-left:20px;

`
const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
`

const Newsletter = () => {
  return (
    <Container>

        <Tilte> Newsletter</Tilte>
        <Description>Time for the Update and news </Description>
        <Inputcontainer>
        
           <Input placeholder='Your Email'/>
           <Butoon>
<DirectionsBoatFilledIcon/>
           </Butoon>
        </Inputcontainer>
    </Container>
  )
}

export default Newsletter