import React, {useState, useEffect} from 'react'
import "./Home.css"

//images & icons
// import testImg from "../../assets/comp.jpg"

//intercomponent imports


//external dependenices
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='home-shell'>
      <div className="header-shell">
        <Link to="/" className='title-style'> CSToday 🖥️</Link>
      </div>
      <div className="article-selection">
      <Link to="article" className='recent-article'>

          <div className="cover-image-area">
              <img  alt="recent-article-image" /> 
          </div>
          <div className="summary-text">
            <div className="info-tag">
              <p>Latest Release</p>
            </div>
            <div className="data">
              <h1 className='article-title'>Revolutionary AI Invention</h1>
              <p className='article-description'>A groundbreaking AI invention is reshaping industries, boosting efficiency, enabling automation, and raising important questions about ethics and control.</p>
              <p className='metadata'>5/26/25</p>
              <p className='metadata'>written by ishaan chiplunkar</p>
            </div>
          </div>
      </Link>
        <div className="recent-catalog">

          <div className="mini-article"> 
            <Link to='article' className="top">
              <img alt="recent-article-image" /> 
              <h1>Revolutionary AI Invention</h1>
            </Link>
            <p>Raising important questions about ethics and control.</p>
          </div>

          <div className="mini-article"> 
            <Link to='article' className="top">
              <img alt="recent-article-image" /> 
              <h1>Revolutionary AI Invention AI Invention</h1>
            </Link>
            <p>A groundbreaking AI invention is reshaping industries, boosting efficiency, enabling automation, and raising important questions about ethics and control.</p>
          </div>

          <div className="mini-article">  
            <Link to='article' className="top">
              <img alt="recent-article-image" /> 
              <h1>Revolutionary AI Invention</h1>
            </Link>
            <p>A groundbreaking AI invention is reshaping industries, boosting efficiency, enabling automation, and raising important questions about ethics and control.</p>
          </div>


          <div className="mini-article"> 
            <Link to='article' className="top">
              <img alt="recent-article-image" /> 
              <h1>Revolutionary AI Invention AI Invention</h1>
            </Link>
            <p>A groundbreaking AI invention is reshaping industries, boosting efficiency, enabling automation, and raising important questions about ethics and control.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home