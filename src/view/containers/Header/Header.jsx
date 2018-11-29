import React, { Component } from 'react'
import H1Title from '../../parts/H1Title/H1Title'
import List from '../../parts/List/List'

const lists = [
	{
		objects: [
		"Decoração",
		"Presentes",
		"Papelaria",
		"Brinquedos",
		"Canecas",
		"Almofadas"
		]
	},
	{
		food: [
		"Doces",
		"Marmitas saudáveis",
		"Snacks",
		"Bolo de casamento",
		"Salgados",
		"Brigadeiro gourmet"
		]
	},
	{
		services: [
		"Consertos",
		"Elétrica",
		"Hidráulica",
		"Montagem de móveis",
		"Mudanças"
		]
	}
]

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<header className="Header">
			<div className="Header_column magenta">
				<ul>
					<li>Lorem ipsum</li>
					<li>bla bla bla</li>
					<li>lula presidente 2022</li>
					<li>que</li>
					<li><small><a href="">ver todos +</a></small></li>
				</ul>
			</div>
			<div className="Header_column white">
				<ul>
					<li>Lorem ipsum</li>
					<li>bla bla bla</li>
					<li>lula presidente 2022</li>
					<li>que</li>
					<li><small><a href="">ver todos +</a></small></li>
				</ul>
			</div>
			<div className="Header_column blue">
				<ul>
					<li>Lorem ipsum</li>
					<li>bla bla bla</li>
					<li>lula presidente 2022</li>
					<li>que</li>
					<li><small><a href="">ver todos +</a></small></li>
				</ul>
			</div>
			<div className="Header_column light_blue">
				<ul>
					<li>Lorem ipsum</li>
					<li>bla bla bla</li>
					<li>lula presidente 2022</li>
					<li>que</li>
					<li><small><a href="">ver todos +</a></small></li>
				</ul>
			</div>
			</header>
			)
	}
}

export default Header