import { React, useContext } from 'react'
import SelectedFilter from '../Filter/SelectedFilter';
import "./JokeDetails.css";
import { AppContext } from '../../App';

const JokeDetails = () => {

    const { joke } = useContext(AppContext);
    const { setShow } = useContext(AppContext);
    const { show } = useContext(AppContext);

    let selectedButton = {
        text: "Puns",
        bgColor: "#5adbe6",
        borderButton: "#5adbe6",
        color: "#fff",
    }

    return (
        <>
            <button className='previous-button' onClick={() => setShow(!show)}>
                <img src={require("../../assets/images/arrow-left.png")} alt='previous' />
            </button>
            <div className='DetailedJokeContainer'>
                <div>
                    <div className='joke-card'>
                        <div className='joke-top-card'>
                            <div className='joke-header'>
                                <div><SelectedFilter btn={selectedButton} /></div>
                                {joke.likes <= 50 && <div className='nb-likes' style={{ color: "#57dbe6" }}><ul><li>popular</li></ul></div>}
                                {joke.likes <= 100 && joke.likes > 50 && <div className='nb-likes' style={{ color: "#ff915b" }}><ul><li>trending</li></ul></div>}
                                {joke.likes > 100 && <div className='nb-likes' style={{ color: "#ff5b5b" }}><ul><li>epic</li></ul></div>}
                            </div>
                            <h2 className='joke-card-title'>The Granny Joke</h2>
                        </div>
                        <p className='joke-card-body'>{joke.value}</p>
                    </div>
                    <div className='reaction-section'>
                        <div className='likes-container'>
                            <div>
                                <div className='like-button'>
                                    <img src={require("../../assets/images/hand.png")} alt='like icon' />
                                </div>
                                <p className='btn button-success'>{joke.likes}</p>
                            </div>
                            <div>
                                <div className='dislike-button'>
                                    <img src={require("../../assets/images/hand-copy.png")} alt='like icon' />
                                </div>
                                <p className='btn button-danger'>{joke.dislikes}</p>
                            </div>
                        </div>
                        <div>
                            <button className='move-button'>
                                <span className='arrow-spacing'>
                                    <img width={10} height={10} src={require("../../assets/images/arrow-left.png")} alt='prev' />
                                </span>
                                Prev Joke</button>
                            <button className='move-button'>Next Joke
                                <span className='arrow-spacing'>
                                    <img width={10} height={10} src={require("../../assets/images/arrow-left-copy.png")} alt='next' />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='jokes-list'>
                    <h5 className='top-jokes-title'>The top 10 jokes this week</h5>
                    <p className='top-jokes'>Smoking Joke</p>
                    <p className='top-jokes'>My Boss Joke</p>
                    <p className='top-jokes'>Dirty Millionaire Joke</p>
                    <p className='top-jokes'>The annoying neighbor</p>
                    <p className='top-jokes'>Knock knock</p>
                    <p className='top-jokes'>Why Tyson lips</p>
                    <p className='top-jokes'>The drunk police officer</p>
                    <p className='top-jokes'>My hip dad</p>
                    <p className='top-jokes'>What's not to say in an elevator</p>
                </div>
            </div>
        </>
    )
}

export default JokeDetails