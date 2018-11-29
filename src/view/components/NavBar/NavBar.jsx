import React, { Component } from 'react'
import NavItem from '../../parts/NavItem/NavItem.jsx'

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.items = this.props.items
	}

	create() {
		return this.items.map((item, i) => <NavItem href={ item.href } key={i} text={ item.text } />)
	}

	render() {
		return (
			<nav className='navBar'>
				<ul className='navBar_list'>
					{this.create()}
				</ul>
			</nav>
		)
	}
}

export default NavBar