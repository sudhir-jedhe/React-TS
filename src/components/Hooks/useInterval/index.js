import React, { useState, useEffect, useRef } from 'react'; 

// creating the custom useInterval hook 
export function useInterval(callback, delay) { 
	// Creating a ref 
	const savedCallback = useRef(); 

	// To remember the latest callback . 
	useEffect(() => { 
		savedCallback.current = callback; 
	}, [callback]); 

	// combining the setInterval and 
	//clearInterval methods based on delay. 
	useEffect(() => { 
		function func() { 
			savedCallback.current(); 
		} 
		if (delay !== null) { 
			let id = setInterval(func, delay); 
			return () => clearInterval(id); 
		} 
	}, [delay]); 
}


import './App.css'; 
import { useState } from 'react'
//Import the custom hook 
import { useInterval } from './useInterval'

export default function App() { 
	// The counter 
	const [count, setCount] = useState(0) 
	// Updating the delay dynamically 
	const [delay, setDelay] = useState() 
	// Toggle play pause the counter 
	const [isPlaying, setPlaying] = useState(false) 

	useInterval( 
		() => { 
			//counter function 
			setCount(count + 1) 
		}, 
		// Passing in the delay parameter. null stops the counter. 
		isPlaying ? delay : null, 
	) 

	const handleChange = (e) => { 
		setDelay(e.target.value) 
	} 

	return ( 
		<> 
			<div className='counterStyle'> 

				<h1>Let's begin counting!</h1> 
				<h1>{count}</h1> 
				<button className='btn' onClick={() => 
					setPlaying(!isPlaying)}> 
					{isPlaying ? 
					'Pause' : 
					'Play '} 
				</button> 
				<p> 
					<label htmlFor="delay">Delay: </label> 
					<input 
						type="text" 
						name="delay" 
						onChange={handleChange} 
						value={delay} 
						placeholder='Enter delay time' 
					/> 
				</p> 
			</div> 
		</> 
	) 
} 
