import React from 'react'
import "./Filter.css";

const FilterButton = ({ btn, clicked, index }) => {

    const buttonStyle = {
        color: btn.color,
        backgroundColor: btn.bgColor,
        border: `solid 1px ${btn.borderButton}`
    }


    return (
        <>
            <button onClick={() => clicked(index)} type='submit' className='filterButton' style={buttonStyle}>{btn.text}</button>
        </>
    )
}


export default FilterButton