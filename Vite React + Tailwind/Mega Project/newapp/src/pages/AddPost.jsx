import React from 'react'
import { Container, } from '../Components'
import PostForm from '../Components/Post-form/PostForm'

function AddPost() {
  return (
    <div className='py-8'>
      <Container>
         <PostForm />
      </Container>
    </div>
  )
}

export default AddPost
