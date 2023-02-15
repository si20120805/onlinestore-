import React from 'react'
import styled from 'styled-components'
import Products from './Products'

const product=[{name:'siddharth',

class:'razer',
game:'killer'

}]

const Container=styled.dv`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;


`

const Pro = () => {
  return (
   <Container>

    {product.map(key=>(
        <Products item={item} key={key.name}/>
    ))}
   </Container>
  )
}

export default Pro