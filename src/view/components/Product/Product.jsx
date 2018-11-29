import React, { Component } from 'react'

import Title from '../../parts/Title/Title'

class Product extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	create() {
		return this.props.values.map((item, i) => (
			<div className='Product_box' key={i}>
				{ item.title }
			</div>
		))
	}

	render() {
		return (
			<div className='Product'>
				<Title text={ this.props.title } />
				{ this.create() }
			</div>
		)
	}
}

export default Product