import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import List from '../../parts/List/List'

class Menu extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<div className="Menu">
				<div className="Menu_icon">
					<FontAwesomeIcon icon="bars" />
				</div>
				<div className="Menu_column">
					<div className='Menu_logoColumn'>
						<img src="img/logo.png"/>
					</div>
					<div className='Menu_closeColumn'>
						<FontAwesomeIcon icon="times" />
					</div>
					<List values={ this.props.items.siteItems } />
					<List values={ this.props.items.saleItems } />
				</div>
			</div>
		)
	}
}

export default Menu