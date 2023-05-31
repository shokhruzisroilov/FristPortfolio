import React from 'react'
import "./WorkCard.css"
import { NavLink } from 'react-router-dom'

function WorkCard({imgsrc, title, text, view, source}) {
	return (
		<div className='project-card'>
			<img src={imgsrc} alt='owa books img' />
			<h2 className='project-title'>{title}</h2>
			<div className='pro-details'>
				<p>{text}</p>
			</div>
			<div className='pro-btns'>
				<NavLink to={view} className='btn'>
					View
				</NavLink>
				<NavLink to={source} className='btn'>
					Source
				</NavLink>
			</div>
		</div>	
	)
}

export default WorkCard