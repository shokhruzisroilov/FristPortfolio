import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from "./WorkCardData"

function Work() {
	return (
		<div className='work-container'>
			<h1 className='project-heading'>Projects</h1>
			<div className='project-container'>
				{WorkCardData?.map((item) => {
					return (
						<WorkCard
							key={item.id}
							imgsrc={item.imgsrc}
							title={item.title}
							text={item.text}
							view={item.view}
							source={item.source}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Work
