import React, { Component } from 'react'

import NavBar from '../../components/NavBar/NavBar.jsx'
import Menu from '../../components/Menu/Menu.jsx'
import Input from '../../parts/Input/Input.jsx'
import Search from '../../components/Search/Search.jsx'

class TopBar extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.menu = props.menu

		this.items = [
			{
				text: 'Entrar',
				href: '/sigin'
			},
			{
				text: 'Cadastrar',
				href: '/signup'
			}
		]
	}

	render() {
		return (
			<div className='topBar'>
					<Menu items={ this.menu } />
					
					<div className='topBar_navColumn'>
						<NavBar items={ this.items } />
					</div>
					<div className='topBar_logoColumn'>
						<img src="img/logo.png"/>
					</div>
			</div>
		)
	}
}

export default TopBar