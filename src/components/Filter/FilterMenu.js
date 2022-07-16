import { React, useState } from 'react'
import FilterButton from "./FilterButton"
import "./Filter.css";
import SelectedFilter from './SelectedFilter';

const FilterMenu = () => {

    const buttons = [
        {
            text: "Adult Jokes",
            bgColor: "#ff5b5b",
            borderButton: "#ff5b5b",
            color: "#fff",
            show: false
        },
        {
            text: "Dad Jokes",
            bgColor: "#ff915b",
            borderButton: "#ff915b",
            color: "#fff",
            show: false
        },
        {
            text: "Christmas Jokes",
            bgColor: "#ffbe5b",
            borderButton: "#ffbe5b",
            color: "#fff",
            show: false
        },
        {
            text: "Job Jokes",
            bgColor: "#ffdf5b",
            borderButton: "#5e5e5e",
            color: "#5e5e5e",
            show: false
        },
        {
            text: "Birthday Jokes",
            bgColor: "#8fe360",
            borderButton: "#8fe360",
            color: "#fff",
            show: false
        },
        {
            text: "Social Jokes",
            bgColor: "#57e690",
            borderButton: "#57e690",
            color: "#fff",
            show: false
        },
        {
            text: "Puns",
            bgColor: "#5adbe6",
            borderButton: "#5adbe6",
            color: "#fff",
            show: false
        }
    ]
    let view_button = {
        text: "View All",
        bgColor: "transparent",
        borderButton: "#d0ba93",
        color: "#d0ba93",
        image: "path-copy-7.png",
        show: false
    }
    let view_button_style = {
        color: view_button.color,
        backgroundColor: view_button.bgColor,
        border: `solid 1px ${view_button.borderButton}`
    }

    const [buttonsArray, setButtonsArray] = useState(buttons)


    const clicked = (index) => {
        let buttons_state = [...buttonsArray]
        let button_element = { ...buttons_state[index] }
        button_element.show = !button_element.show
        buttons_state[index] = button_element
        setButtonsArray(buttons_state)
    }

    const clicked_all = () => {
        let buttons_state = [...buttonsArray]
        for(let i = 0; i<buttons_state.length; i++) {
            let button_element = { ...buttons_state[i] }
            button_element.show = !button_element.show
            buttons_state[i] = button_element
        }
        
        setButtonsArray(buttons_state)
    }

    return (
        <div className='container'>
            <div className='buttons-container'>

                {
                    buttonsArray.map((btn, index) => <FilterButton key={index} btn={btn} clicked={clicked} index={index} />)
                }
                <button onClick={clicked_all} type='submit' className='filterButton' style={view_button_style}>{view_button.text}<img className='button-icon' src={require(`../../assets/images/${view_button.image}`)} alt='Button icon' /></button>

            </div>
            <div className='selections'>

                {
                    buttonsArray.map((btn, index) => btn.show && btn.text !== "View All" && <SelectedFilter key={index} btn={btn} />)
                }

            </div>
        </div>
    )
}

export default FilterMenu