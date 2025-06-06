import React, {useState, useEffect} from 'react'
import "./Home.css"

//images & icons
import testImg from "../../assets/comp.jpg"

//intercomponent imports
import { homeArticleMainSet, homeArticleSideSet } from '../Article/ArticleData'


//external dependenices
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='home-shell'>
      <div className="header-shell">
        <Link to="/csa-news-final" className='title-style'> CSToday 🖥️</Link>
      </div>
      <div className="article-selection">
      <Link to="/csa-news-final/article/0" className='recent-article'>

          <div className="cover-image-area">
              <img  src={homeArticleMainSet.img} alt="recent-article-image" /> 
          </div>
          <div className="summary-text">
            <div className="info-tag">
              <p>Latest Release</p>
            </div>
            <div className="data">
              <h1 className='article-title'>{homeArticleMainSet.title}</h1>
              <p className='article-description'>{homeArticleMainSet.mini_description}</p>
              <p className='metadata'>{homeArticleMainSet.release_date}</p>
              <p className='metadata'>{homeArticleMainSet.author}</p>
            </div>
          </div>
      </Link>
        <div className="recent-catalog">

          {homeArticleSideSet.map((data, i) =>(
              <div className="mini-article">
              <Link to={`/csa-news-final/article/${i+1}`} className="top">
                <img src={data.img} alt="recent-article-image" style={{'filter': `hue-rotate(${45 + 45*i}deg)`}}/> 
                <h1>{data.title}</h1>
              </Link>
              <p>{data.mini_description}</p>
            </div>
            

          ))}

        </div>
      </div>
    </div>
  )
}

export default Home