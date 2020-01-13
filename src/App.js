import React from 'react'
import { CardStack } from './Components/CardStack/'
import { Header } from './Components/Header'
import './App.css'

const App = () => {
	return (
		<>
			<Header />
			<CardStack id="card_stack_container" />
		</>
	)
}

export default App
