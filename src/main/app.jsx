import React from 'react'

import TopBar from '../view/containers/TopBar/TopBar'
import Header from '../view/containers/Header/Header'
import Title from '../view/parts/Title/Title'
import Product from '../view/components/Product/Product'
import Footer from '../view/containers/Footer/Footer'
import Search from '../view/components/Search/Search'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faSearch, faSlidersH, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faSearch, faSlidersH, faBars, faTimes)

const products = [
	{
		backgroundImage: "",
		title: "Teste",
		categories: ["acessórios", "bijouterias"],
		url: "/nome"
	},
	{
		backgroundImage: "",
		title: "Teste",
		categories: ["acessórios", "bijouterias"],
		url: "/nome"
	},
	{
		backgroundImage: "",
		title: "Teste",
		categories: ["acessórios", "bijouterias"],
		url: "/nome"
	}
]

const menu = {
	siteItems: [
		{
			text: "Início",
			href: "/nome"
		},
		{
			text: "Sobre",
			href: "/nome"
		},
		{
			text: "Contato",
			href: "/nome"
		},
		{
			text: "Cadastrar",
			href: "/nome"
		},
		{
			text: "Entrar",
			href: "/nome"
		}
	],
	saleItems: [
		{
			text: "Produtos",
			href: "/nome"
		},
		{
			text: "Serviços",
			href: "/nome"
		},
		{
			text: "Eventos",
			href: "/nome"
		},
		{
			text: "Lojas Físicas",
			href: "/nome"
		}
	]
}

export default props => (
	<div>
		<TopBar values={ products } menu={ menu } />
		<Header />
		<div className="search_container">
			<Search />
		</div>
		<div className='container'>
			<div className='section'>
				<Product title='Produtos' values={ products } />
			</div>
			<div className='section'>
				<Product title='Serviços' values={ products } />
			</div>
		</div>
		<Footer />
	</div>
)