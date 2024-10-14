import React from 'react'
import Home from './Components/Home'
import 'boxicons'
import Events from './Components/Events'

function App() {
	// onTouchStart={(e)=>{console.log(e)}}
	return (
		<div >
			<Home />
			<Events/>
		</div>
	)
}

export default App