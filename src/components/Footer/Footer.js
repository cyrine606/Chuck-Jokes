import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-bg'>
        <div>
            <h4 className='footer-title'>Got Jokes? Get paid for submitting!</h4>
            <p className='footer-content'>Submit Joke<img src={require("../../assets/images/path-copy-4.png")} alt='submit joke' /></p>  
        </div>
    </div>
  )
}

export default Footer