import React, {useState, useEffect} from 'react'
import "./Article.css"

//images & icons
import testImg from "../../assets/comp.jpg"

//intercomponent imports
import { homeArticleFullSet } from './ArticleData'
import { getWordCount } from './ArticleHelper'

//external dependenices
import { Link, useParams } from 'react-router-dom'
import {ArrowUpIcon, ArrowDownIcon} from "@heroicons/react/24/solid"

const Article = () => {
  const {id} = useParams()
  return (
    <div className='article-shell'>
        <div className="header-shell">
            <Link to="/" className='title-style'> CSToday 🖥️</Link>
        </div>
        <div className="title-area">
            <div className="article-data">
                <h1>{homeArticleFullSet[id].title}</h1>
                <p>{homeArticleFullSet[id].mini_description}</p>
                <div className="article-authorship">
                    <p>{homeArticleFullSet[id].author}</p>
                    <p>{homeArticleFullSet[id].release_date}</p>
                </div>

            </div>
            <div className="article-img">
                <img src={homeArticleFullSet[id].img}  alt="recent-article-image" style={{'filter': `hue-rotate(${45*id}deg)`}}/> 
            </div>
        </div>

        <div className="article-area">

            <div className="article-content">
            <div className="feature-bar">
              <p className="word-count">{getWordCount(homeArticleFullSet[id])} words</p>
              <p>A <ArrowUpIcon style={{'width':'18px'}}></ArrowUpIcon></p>
              <p>a <ArrowDownIcon style={{'width':'18px'}}></ArrowDownIcon></p>
              </div>
            {
                homeArticleFullSet[id].text.map((section) =>(
                    <div>
                        <h1>{section.header}</h1>
                        <p>{section.content}</p>
                    </div>
                ))
            }
            <div className="reference-area"> 
                <h3>References</h3>
                <p>{homeArticleFullSet[id].citation}</p>
            </div>
            </div>
            <div className="article-ads">
                <div className="slot">
                    <div className="slot-one">
                        <h1>Support CSToday</h1>
                        <p>CSToday delivers free, reliable, and up-to-date computer science news, empowering learners and professionals to stay informed and inspired daily.</p>
                    </div>

                </div>
                <div className="slot">
                    <div className="slot-two">
                            <img src={homeArticleFullSet[id].sponserOne.img} alt="recent-article-image" /> 
                            <p>Free Code Camp is a non-profit that provides free online coding courses and certifications in various fields, including web development, data science, and more.</p>
                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Article

//what