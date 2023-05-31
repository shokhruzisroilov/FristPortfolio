import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'

import aboutImg from "../assets/into-bg-img.jpg"
import aboutImg2 from '../assets/into-bg-img.jpg'

function AboutContent() {
	return (
		<div className='about'>
			<div className='left'>
				<h1>Who Am I?</h1>
				<p>
					I'm Front-end developer. I create responsive secure websites for my
					clients
				</p>
				<Link to='/contact'>
					<button className='btn'>CONTACT</button>
				</Link>
			</div>
			<div className='right'>
				<div className='img-container'>
					<div className='img-stack top'>
						<img src={aboutImg} alt='About Img' />
					</div>
					<div className='img-stack bottom'>
						<img src={aboutImg2} alt='About Img' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutContent