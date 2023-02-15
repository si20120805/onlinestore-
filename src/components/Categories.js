import React from 'react'
import {Styled} from '@material-ui/core'
import Categoreitem from './Categoreitem'

const category=[{image:'xyz',

title:'killercorsover',

}]

const Container=styled.div`

display:flex;
padding:20px;
justify-content:space-between;
`

const Categories = () => {
  return (
    <Container>

       {
      category.map((item)=>
      
      <Categoreitem item={item}/>)


       }



    </Container>
  )
}

export default Categories























Categories