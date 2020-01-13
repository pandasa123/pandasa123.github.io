import React from 'react'
import { CardStack } from './Components/CardStack/'
import './App.css'

const App = () => {
	return (
		<>
			<div id="header">
				<h1 className="page_title">
					<span className="underline--magical">Hi, I'm Sanket Panda</span>
				</h1>
			</div>
			<div id="card_stack_container">
				<CardStack />
			</div>
		</>
	)
}

export default App
