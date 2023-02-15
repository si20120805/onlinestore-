import React from 'react'
import {styled} from '@material-ui/core'


const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;

`
const Image=styled.img`
width:100%;
heigth:100%;
object-fit :cover;



`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
heigth:100%;
display:flex;
justify-content:center;
flex-direction:column;

`
const Title=styled.h1`
color:white;
margin-bottom:20px;


`
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:grey;
cursor:pointer;
font-weigth:600;
`

const Categoreitem = ({item}) => {
  return (
    <Container>
        <Image src={item.image}></Image>
        <Info>

            <Title>{item.tilte}</Title>
            <Button>Shop Now </Button>
        </Info>

     


    </Container>
  )
}

export default Categoreitem