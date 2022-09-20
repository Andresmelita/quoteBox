import React from 'react'

const QuoteBox = ({randomQuote}) => {

    return (
        <article>
            <p className='card_quote'><span className='comillas'>❝  </span>{randomQuote.quote}</p>
            <h1 className='card_author'>{randomQuote.author}</h1>
        </article>
    )
}

export default QuoteBox