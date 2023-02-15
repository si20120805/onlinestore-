import { ShoppingCartOutlined } from '@mui/icons-material'
import SearchOffIcon from '@mui/icons-material/SearchOff';
import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';


const Info=styled.div`
opacity:0;
width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0,0.2);
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;
    
`

const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:blue;
position:relative;

&:hover ${Info}{

opacity:1;
}
`

const Circle=styled.div`
   width:200px;
   heigth:200px;
   border-radius:50%;
   background-color:white;
   position:absolute;

   


`
const Image=styled.img`
heigth:75%;
z-index:2;
`

const Icon=styled.div`
width:40px;
heigth:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
margin:10px;
transition:all 0.5s ease;

&:hover{

    background-color:white;
    transform:scale(1.1);
}

`


const Products = ({items}) => {
  return (
<Container>
    <Circle/>
    <Image src={items.game}/>
    <Info>
       
        <Icon>

            <ShoppingCartOutlined/>
        </Icon>

        <Icon>

<SearchOffIcon/>
</Icon>

    </Info>

      
    <Icon>

<FavoriteIcon/>
</Icon>



</Container>
  )
}

export default Products