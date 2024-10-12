import React from 'react'
import Event from './Event'
import photo from '../../bg.png'

function Tech() {
	return (
		<div className="w-4/6 flex flex-col justify-center items-center ">
			<Event name="Paper Presentaion" number="2" img={photo} />
			<Event name="Paper Presentaion" number="2"/>
			<Event name="Paper Presentaion" number="2"/>
			<Event name="Paper Presentaion" number="2"/>
		</div>
	)
}

export default Tech