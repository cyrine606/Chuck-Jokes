import React from 'react'
import "./BannerSection.css";

const Contentsection = () => {
  return (
    <div className='content-container'>
      <div className='banner-content'>
        <h1 className='title'>The Joke Bible</h1>
        <h4 className='sub-title'>Daily Laughs for you and yours</h4>
        <div className='search-bar'>
          <input className='search-input' type="text" placeholder='How can we make you laugh today?' />
          <img className='search-icon' src={require("../../assets/images/search-copy.png")} alt="search icon" />
        </div>
      </div>
    </div>
  )
}

export default Contentsection