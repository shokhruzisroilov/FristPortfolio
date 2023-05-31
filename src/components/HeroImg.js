import React from 'react'
import "./HeroImg.css"
import { Link } from 'react-router-dom'

import heroImg from "../assets/into-bg-img.jpg"

function HeroImg() {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='into-img' src={heroImg} alt='into background img' />
			</div>
			<div className='content'>
				<p>HI, MY NAME IS SHOHRUZ</p>
				<h1>Frontend developer.</h1>
				<div>
					<Link to='/project' className='btn'>
						PROJECTS
					</Link>
					<Link to='/contact' className='btn btn-light'>
						CONTACT
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeroImg