import { Link } from 'wouter'
import MenuIcon from '../../assets/icons/MenuIcon.jsx'

import './nav.css'

const Nav = () => {
	return (
		<nav className='menu_nav'>
			<button className='show_nav'>
				<MenuIcon />
			</button>

			<ul className='nav'>
				<li className='nav_item'>
					<Link to='/animals/dogs' className='nav_item_link'>
						Perros <span className='nav_item_icon'>v</span>
					</Link>
				</li>

				<li className='nav_item'>
					<Link to='/animals/dogs' className='nav_item_link'>
						Gatos <span className='nav_item_icon'>v</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
