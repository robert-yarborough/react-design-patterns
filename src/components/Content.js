import React, { Component } from 'react';
import { withChartContext } from '../hocs/withChartContext';

class Content extends Component {
	render() {
		const {onSnackBarMessage} = this.props.context;
		return (
			<div className="contentComponent">
				<a
					className="messageContainer"
					onClick={onSnackBarMessage}>
					<span className="message">
						<strong>display chart data</strong>
					</span>
				</a>
			</div>
		);
	}
}

export default withChartContext(Content);