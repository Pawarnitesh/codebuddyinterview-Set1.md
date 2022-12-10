import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostDetails = ({ id, firstName, lastName, writeup, image, avatar }) => {
  return (
    <div style={{ display: 'flex' }}>
      <img src={image} alt="post image" />
      <img src={avatar} alt="author image" />
      <h3>
        {id}-First Name: {firstName}
      </h3>
      <h3>Last Name: {lastName}</h3>
      <h4>Description: {writeup}</h4>
    </div>
  )
}

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    let url = 'https://codebuddy.review/posts'
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setPosts(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <section>
        {Array.isArray(posts) &&
          posts.map((id) => <PostDetails key={id} {...posts} />)}
      </section>
    </>
  )
}

export default Posts
