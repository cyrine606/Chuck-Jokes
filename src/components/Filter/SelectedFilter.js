import React from 'react'
import "./Filter.css";

const SelectedFilter = ({ btn }) => {

    const buttonStyle = {
        color: btn.color,
        backgroundColor: btn.bgColor,
        border: `solid 1px ${btn.borderButton}`
    }

  return (
        <>
            <button type='submit' className='selectedFilter' style={buttonStyle}>{btn.text}</button>
        </>
  )
}

export default SelectedFilter