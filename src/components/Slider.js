import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Container=style.div`
width:100%;
heigth:100vh;
display:flex;
background-color:coral;
position:relative;
overflow:hidden;

`
const Arrow=styled.div`

width:50px;
heigth:50px;
background-color:white;
border-radius=50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=>props.direction==='left' &&'10px' }
right:${props=>props.direction==='right' &&'10px' }
cursor:pointer;
`

const Wrapper=styled.div`
heigth:100%;
display:flex;
transition:all 1.5s ease ;
transform:translateX(${(props)=>props.slideindex*-100}vw)

`
const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
heigth:100vh;

`
const Imagecontainer=styled.div`
flex:1;
heigth:100%;
`
const Image=styled.img`
heigth:80%;


`
const Infocontainer=styled.div`

flex:1;
padding:50px
`

const Title=styled.h1`
font-size:70px;

`
const P=styled.p`
margin:50px 0px;
font-size:20px;
font-weigth:500;
letter-spacing:3px;

`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;

`





const Slider = () => {
    const [slideindex,setslideindex]=useState(0)

    const handleclick=(direction)=> {
        if(direction==='left'){

            setslideindex(slideindex> 0 ? slideindex-1 : 2)
        }else{
            setslideindex(slideindex<2 ? slideindex+1:0)


        }

         
    }
  return (
    <Container>
<Arrow direction='left' onClick={()=>handleclick('left')}>

<ArrowBackIcon/>
</Arrow>
<Wrapper slideindex={slideindex}>
<Slide>
<Imagecontainer>

    <Image src='https://picsum.photos/seed/picsum/200/300'/>
</Imagecontainer>
<Infocontainer>

    <Title>Summer Sail</Title>
    <P>Don't compromise on the Style </P>
    <Button>SHOW NOW</Button>
</Infocontainer>
</Slide>

<Slide>
<Imagecontainer>

    <Image src='https://picsum.photos/seed/picsum/200/300'/>
</Imagecontainer>
<Infocontainer>

    <Title>Summer Sail</Title>
    <P>Don't compromise on the Style </P>
    <Button>SHOW NOW</Button>
</Infocontainer>
</Slide>

<Slide>
<Imagecontainer>

    <Image src='https://picsum.photos/seed/picsum/200/300'/>
</Imagecontainer>
<Infocontainer>

    <Title>Summer Sail</Title>
    <P>Don't compromise on the Style </P>
    <Button>SHOW NOW</Button>
</Infocontainer>
</Slide>
</Wrapper>


<Arrow direction='right' onClick={()=>handleclick('right')}>

<ArrowForwardIcon/>
</Arrow>

    </Container>
  )
}

export default Slider