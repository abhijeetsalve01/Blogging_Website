import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../img/Logo.png'
import axios from "axios"
import upload from "../"

const Home = () => {
  const [posts, setPost] = useState([])

  // const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/posts')
        setPost(res.data);
      } catch (err) {
        console.error(err)
      }
    }
    fetchData();
  }, [])

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }



  return (

    <div className="home">
      <div className='theblog'>
        <span>The Blog</span>
      </div>

      <div className='writings'>
        <span>
          Writings from our team
        </span>
      </div>

      <div className='latest'>
        <span>
          The latest industry news, interviews, technologies, and resources.</span>
      </div>

      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{getText(post.title)}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Home