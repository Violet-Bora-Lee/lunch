import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav style={{marginBottom: '30px'}}>
			<div className="nav-wrapper">
				<ul id="nav-mobile" className="left hide-on-med-and-down">
					<li>
						<Link to='/'>People</Link>
					</li>
					<li>
						<Link to='/roulette'>Let's turn!</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
