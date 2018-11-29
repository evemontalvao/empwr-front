import React, { Component } from 'react'

class Title extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		if(!this.props.href) {
			return(
				<h4 className='title'>{ this.props.text }</h4>
			)
		}

		return (
			<a href={ this.props.href } className='title'>{ this.props.text }</a>
		)
	}
}

export default Title