import React, { Component } from 'react';
import {SnackBar} from '../../common/';

export const ChartContext = React.createContext();

class ChartProvider extends Component{
	constructor(props) {
		super(props);
		this.state = {
			snackbar: {
				open: false,
				message: ''
			}
		};

		this.onSnackBarMessage = this.onSnackBarMessage.bind(this);
	}

	onSnackBarMessage(message) {
		this.setState({
			snackbar: {
				open: true,
				message
			}
		});
	}

	render() {
		return (
			<ChartContext.Provider
				value={{
					state: this.state,
					onSnackBarMessage: this.onSnackBarMessage
				}}>
				{this.props.children}
				<SnackBar
					snackbarOpen={this.state.snackbar.open}
					snackbarMessage={this.state.snackbar.message}
					snackbarHandleRequestClose={() => {
						this.setState({
							snackbar: {
								open: false,
								message: ''
							}
						});
					}}/>
			</ChartContext.Provider>
		);
	}

}

export default ChartProvider;