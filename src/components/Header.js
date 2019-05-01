import React, { Component } from 'react';
import { withAppContext } from '../hocs/withAppContext';

class Header extends Component {
	render() {
		return (
			<div className="headerComponent">
				<a
					className="pricingContainer"
					onClick={this.props.context.onOpenPricingModal}>
					<p className="buy">
						Pricing. <strong>save up to 27%</strong>
					</p>
				</a>
			</div>
		);
	}
}

export default withAppContext(Header);