import React, { useState } from 'react'

function Event({ name, number, img }) {
	const [open, setOpen]=useState(false);
	return (
		<div className='w-full border-2 border-black m-3 flex flex-col items-center justify-center gap-3 rounded-md p-2 rotate-x-90'>
			{
				<>
					<img src={img} alt="img" className=' h-32 rounded-md' />
					<div className='w-full flex flex-col '>
						<div className='font-bold'>{name}</div>
						<div className='font-bold'>Participate : {number}</div>
						<button className=' border-2 font-serif  rounded-2xl text-base px-4 py-1 mt-10'>Rules and Round</button>
					</div>
				</>
			}
		</div>
		
	)
}

export default Event