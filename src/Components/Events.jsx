import React from 'react'
import Tech from './Events/Tech'
import NonTech from './Events/NonTech'

function Events() {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<Tech />
			<NonTech/>
		</div>
	)
}

export default Events