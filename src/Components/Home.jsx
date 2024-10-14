// import React, { useState } from 'react';
import Navbar from './Navbar';
import bg from '../bg.png'
const Home = () => {
  return (
		<>
			<Navbar />
			<div className=' h-96 font-abril text-4xl  text-center text-white'  style={{ backgroundImage: `url(${bg})`, backgroundSize:'cover'}}>
				<div className='pt-36'>
					THE GREATEST <br />SYMPOSIUM <br /> in SRCE HISTORY
				</div>
				<button className=' border-2 font-serif  rounded-2xl text-base px-4 py-1 mt-10 '>Register Now</button>
			</div>
		</>
  )
};

export default Home;
