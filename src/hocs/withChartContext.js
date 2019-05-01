import React from 'react';
import { ChartContext } from '../common/';

export function withChartContext(Component) {
	return function ComposedComponent(props) {
		return (
			<ChartContext.Consumer>
				{state => <Component {...props} context={state} />}
			</ChartContext.Consumer>
		);
	};
}