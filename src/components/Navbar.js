import "./Navbar.css"

import { Link } from "react-router-dom"
import { useState } from "react"

import { FaBars, FaTimes } from "react-icons/fa"
import { click } from "@testing-library/user-event/dist/click"

function Navbar() {
	const [click, setClick] = useState(false)
	const handleClick = () => {
		setClick(!click)
	}

	const [color, setColor] = useState(false)
	const changeColor = () => {
		if(window.scrollY >= 100){
			setColor(true)
		}else{
			setColor(false)
		}
	}
	window.addEventListener("scroll", changeColor)


	return (
		<div className={color ? 'header header-bg' : 'header'}>
			<Link to='/'>
				<h1>Shohruz Isroilov</h1>
			</Link>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li>
					<Link to='/' onClick={() => setClick(false)}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/project' onClick={() => setClick(false)}>
						Project
					</Link>
				</li>
				<li>
					<Link to='/about' onClick={() => setClick(false)}>
						About
					</Link>
				</li>
				<li>
					<Link to='/contact' onClick={() => setClick(false)}>
						Contact
					</Link>
				</li>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{!click ? (
					<FaBars size={20} style={{ color: '#fff' }} />
				) : (
					<FaTimes size={20} style={{ color: '#fff' }} />
				)}
			</div>
		</div>
	)
}

export default Navbar