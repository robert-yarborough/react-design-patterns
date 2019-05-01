import React, { Component } from 'react';
import { withAppContext } from '../hocs/withAppContext';

class Footer extends Component {
	render() {
		return (
			<div className="footerComponent">
				<strong>Footer</strong>
			</div>
		);
	}
}

export default withAppContext(Footer);