import './App.css'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {
	const changeColor = () => {
		const randomColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16)
		setBgColor(randomColor)
		console.log(randomColor)
	}
	const [BgColor, setBgColor] = useState()

	return (
		<div>
			<Button
				clicked={changeColor}
				style={{ backgroundColor: BgColor }}
				name='Change Background'
			/>
		</div>
	)
}

export default App
