import React from 'react';
import { AppContext } from '../common/';

export function withAppContext(Component) {
	return function ComposedComponent(props) {
		return (
			<AppContext.Consumer>
				{state => <Component {...props} context={state} />}
			</AppContext.Consumer>
		);
	};
}