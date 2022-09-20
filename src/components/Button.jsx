import React from 'react'

const Button = ({randomColor, getRandomAll}) => {

    const backColor = {
        backgroundColor: randomColor
    }
    return (
        <button 
            className='card_btn' 
            onClick={getRandomAll} 
            style={backColor}>⚄
        </button>
    )
}

export default Button;