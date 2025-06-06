import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Article from './components/Article/Article'
const Router = () => {
return (
  <BrowserRouter basename='/csa-news-final'>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/article/:id" element={<Article/>}></Route>
          {/* <Route path="/construction" element={<Construction/>}></Route> */}
      </Routes>
  </BrowserRouter>
)


}


export default Router