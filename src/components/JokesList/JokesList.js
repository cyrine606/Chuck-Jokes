import { React, useLayoutEffect, useState, useContext} from 'react'
import "./JokesList.css";
import axios from 'axios';
import JokeItem from './JokeItem';
import { AppContext } from '../../App';

const JokesList = () => {

    const { setJoke } = useContext(AppContext);
    const { show } = useContext(AppContext);
    const { setShow } = useContext(AppContext);

    let[jokes, setJokes] = useState([])
    let[someJokes, setSomeJokes] = useState([])

    let btn = {
        text: "View More",
        bgColor: "transparent",
        borderButton: "#d0ba93",
        color: "#d0ba93",
        image: "path-copy-7.png",
    }

    let btn_style = {
        color: btn.color,
        backgroundColor: btn.bgColor,
        border: `solid 1px ${btn.borderButton}`
    }

    useLayoutEffect(() => {

        let jokes_state = []
        const getJokes = ()=> {
            axios
          .get("https://api.chucknorris.io/jokes/search?query=all")
          .then((response) => { 
            jokes_state = [response.data.result.slice(0,100)]
            
            jokes_state.forEach((joke) => {
                for(let i = 0; i<joke.length; i++) {
                    let likes = Math.floor(Math.random() * 10000);
                    let dislikes = Math.floor(Math.random() * 10000);
                    joke[i]['likes'] = likes;
                    joke[i]['dislikes'] = dislikes;
                }
            })

            setJokes(jokes_state);
            setSomeJokes(jokes_state[0].slice(0,6));
            return 
          }, [])
        }

        getJokes()
      }, [])



      const handler = () => {
        let initial_jokes = someJokes
        let count = 2*initial_jokes.length
        if(count < jokes[0].length) { 
            initial_jokes = jokes[0].slice(0, count)
        }
        setSomeJokes(initial_jokes);
      }
    

  return (
    <>
        <div className='content'>
            {
            jokes.length !== 0 && someJokes.map((joke) => <JokeItem key={joke.id} joke={joke} setJoke={setJoke} setShow={setShow} show={show} />)
            }
        </div>
        <div className='view-more-button'>
            <button onClick={handler} type='submit' className='filterButton' style={btn_style}>{btn.text}<img className='button-icon' src={require(`../../assets/images/${btn.image}`)} alt='Button icon' /></button>
        </div>
    </>
  )
}

export default JokesList