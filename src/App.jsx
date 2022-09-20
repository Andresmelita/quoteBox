import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'
import Button from './components/Button'


function App() {
  
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  const colorObj = {
    color: randomColor
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
      <div style = {colorObj} className='card'>
      <QuoteBox 
        randomQuote = {randomQuote}
        randomColor = {randomColor}
        getRandomAll = {getRandomAll}
      />
      <Button
        randomColor={randomColor} 
        getRandomAll={getRandomAll}>
      </Button>

      </div>
    </div>
  )
}

export default App


