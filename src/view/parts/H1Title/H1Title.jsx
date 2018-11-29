import React, { Component } from 'react'

class H1Title extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render(props) {
		return (
			<h1 className="H1Title">{ this.props.value }</h1>
		)
	}
}

export default H1Title