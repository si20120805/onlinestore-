import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
heigth:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weigth:Bold


`

const Anoucement = () => {
  return (
    <Container>

        Super Deal! FreeShipping on Order
    </Container>
  )
}

export default Anoucement