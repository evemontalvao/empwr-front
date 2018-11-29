import React, { Component } from 'react'
import NavItem from '../../parts/NavItem/NavItem.jsx'


class List extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.items = this.props.values
	}

	create() {
		return this.items.map((item, i) => <li key={i} className="List_item"><a className="List_href" href={ item.href }> { item.text }</a></li>)
	}

	render() {
		return (
			<ul className='List'>
				{this.create()}
			</ul>
		)
	}
}

export default List