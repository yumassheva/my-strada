import { useState } from "react"
import { emptyValue } from "../LSandConst"
const Header = ({ requestWeather }) => {
  const [inputValue, setInputValue] = useState(emptyValue)

  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      requestWeather(inputValue)
      setInputValue(emptyValue)
    }
    catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        onChange={getInputValue}
        value={inputValue}
      />
      <button type='submit'>+</button>
    </form>
  )
}

export default Header