import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Input from '../../parts/Input/Input.jsx'

class Search extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
			<fieldset className="Search_fieldset">
				<div className="Search_icon search">
					<FontAwesomeIcon icon="search" />
				</div>
				<div className="Search_icon slider">
					<FontAwesomeIcon icon="sliders-h" />
				</div>
				<Input class="Search" placeholder='O que você procura?' />
			</fieldset>
			</div>
		)
	}
}

export default Search