import React from 'react'
import "./JokesList.css";

const JokeItem = ({ joke, setJoke, setShow, show }) => {

    const getJokeDetails = () => {
        setJoke(joke)
        setShow(!show)
    }

  return (
    <>
        <div className='card'>
            <div className='top-card'>
                <img src={require("../../assets/images/green-light-copy.png")} alt='card icon' />
                <h4 className='card-title'>joke</h4>
            </div>
            <p className='card-body'>{joke.value}</p>
            <div className='card-footer'>
                <button onClick={getJokeDetails} type='submit' className='details-button'>See Stats 
                    <span style={{marginLeft: "10px"}}>
                        <img src={require("../../assets/images/path-copy-2.png")} alt='see stats' />
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}

export default JokeItem