import React, { Component } from 'react'

import TopBar from '../containers/TopBar/TopBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faSearch, faSlidersH, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faSearch, faSlidersH, faBars, faTimes)


class SignIn extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>teste</div>
		)
	}
}

export default SignIn