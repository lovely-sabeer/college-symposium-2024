import React, { useState } from 'react'

function Navbar() {
	const [isOpen, setIsOpen]=useState(false);
	return (
		<>
		  {/* The Navbar with menu icon */}
		  <div className='h-auto w-full bg-navbar-bg flex text-navbar-text justify-between px-2 py-4 absolute top-0 z-40'>
		    <div className='text-white'>logo</div>
		    <div onClick={() => setIsOpen(true)}>
		      <box-icon name='menu' color='#ffffff'></box-icon>
		    </div>
		  </div>

		  {/* Dropdown Menu */}
		  <div className={`absolute z-50 w-full bg-navbar-bg overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
		    <div className='w-full bg-navbar-bg flex justify-end px-2 py-4' onClick={() => setIsOpen(false)}>
		      <box-icon name='x' animation='spin' color='#ffffff'></box-icon>
		    </div>
		    <ul className='w-full flex flex-col'>
		      <li className='w-full text-center text-black font-bold py-2 border-b bg-navbar-hover hover:bg-navbar-bg'>Home</li>
		      <li className='w-full text-center text-black font-bold py-2 border-b bg-navbar-hover hover:bg-navbar-bg'>Events and Rules</li>
		      <li className='w-full text-center text-black font-bold py-2 border-b bg-navbar-hover hover:bg-navbar-bg'>Agenda</li>
		      <li className='w-full text-center text-black font-bold py-2 border-b bg-navbar-hover hover:bg-navbar-bg'>Chief Guest</li>
		      <li className='w-full text-center text-black font-bold py-2 border-b bg-navbar-hover hover:bg-navbar-bg'>Contact</li>
		    </ul>
		  </div>
		</>
	)
}

export default Navbar