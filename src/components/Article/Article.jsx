import React, {useState, useEffect} from 'react'
import "./Article.css"

//images & icons
import testImg from "../../assets/comp.jpg"

//intercomponent imports
import { homeArticleFullSet } from './ArticleData'
import { getWordCount, navigateFontSize } from './ArticleHelper'

//external dependenices
import { Link, useParams } from 'react-router-dom'
import {ArrowUpIcon, ArrowDownIcon} from "@heroicons/react/24/solid"

const Article = () => {
  //RETRIEVING ARTICLE: getting article id
        const {id} = useParams();


  //ADJUSTING FONT: word size variables
        const [wordSize,  setWordSize] = useState({
            "h1":30,
            "h3":24,
            "p":16
        })
        const [wordSizeType, setWordSizeType] = useState(1);

        const [fontData, setFontData] = useState({
            fontSet:{
                "h1":30,
                "h3":24,
                "p":16
            },
            size:1
        })

        const handleNavigateFontSize = (direction) =>{
            setFontData(navigateFontSize(wordSizeType, direction))
        }

        useEffect(() =>{
            setWordSize(fontData.fontSet);
            setWordSizeType(fontData.size);
        }, [fontData])

    
    //DYNAMIC INTRODUCTION
            const [introText, setIntroText] = useState("");

            const delay = (ms) => new Promise((resolve) => {
                setTimeout(resolve, ms)
            })

            const loadIntroText = async() =>{
                let localText = "";
                let cursor = "|"
                let fullText = homeArticleFullSet[id].mini_description
                for (let i = 0; i < fullText.length; i++){
                    localText += fullText[i];
                    await delay(35);
                    setIntroText(localText + cursor);
                }
                await delay(500)
                setIntroText(localText)
                await delay(500)
                setIntroText(localText + cursor)
                await delay(500)
                setIntroText(localText)
            }

            useEffect(() =>{
                loadIntroText();
            }, [])





  return (
    <div className='article-shell'>
        <div className="header-shell">
            <Link to="/" className='title-style'> CSToday 🖥️</Link>
        </div>
        <div className="title-area">
            <div className="article-data">
                <h1>{homeArticleFullSet[id].title}</h1>
                <p className='intro-text'>{introText}</p>
                <div className="article-authorship">
                    <p>{homeArticleFullSet[id].author}</p>
                    <p>{homeArticleFullSet[id].release_date}</p>
                </div>
                <div className="feature-bar">
              <p className="word-count">{getWordCount(homeArticleFullSet[id])} words</p>
              <p onClick={() => handleNavigateFontSize("inc")} style={wordSizeType == 2 ? {'color':'gray'} : {'color':'white'}}>A <ArrowUpIcon style={{'width':'18px'}}></ArrowUpIcon></p>
              <p onClick={() => handleNavigateFontSize("dec")} style={wordSizeType == 0 ? {'color':'gray'} : {'color':'white'}}>a <ArrowDownIcon style={{'width':'18px'}}></ArrowDownIcon></p>
            </div>

            </div>
            <div className="article-img">
                <img src={homeArticleFullSet[id].img}  alt="recent-article-image" style={{'filter': `hue-rotate(${45*id}deg)`}}/> 
            </div>
        </div>

        <div className="article-area">

            <div className="article-content">

            {
                homeArticleFullSet[id].text.map((section) =>(
                    <div>
                        <h1 style={{'fontSize':`${wordSize.h1}px`}}>{section.header}</h1>
                        <p style={{'fontSize':`${wordSize.p}px`}}>{section.content}</p>
                    </div>
                ))
            }
            <div className="reference-area"> 
                <h3 style={{'fontSize':`${wordSize.h3}px`}}>References</h3>
                <p style={{'fontSize':`${wordSize.p}px`}}>{homeArticleFullSet[id].citation}</p>
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