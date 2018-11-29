import React, { Component } from 'react'

class NavItem extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<li className="NavItem">
				<a className="NavItem_href" href={ this.props.href }>
					{ this.props.text }
				</a>
			</li>
		)
	}
}

export default NavItem