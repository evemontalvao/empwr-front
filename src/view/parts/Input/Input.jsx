import React, { Component } from 'react'

class Input extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<input type='text' className={this.props.class || 'input'} value={this.props.value} placeholder={this.props.placeholder} />
		)
	}
}

export default Input