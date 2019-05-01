import React from 'react';
import LineChart from './LineChart';


function SnackBar(props) {

	return (
		<div>{props.snackbarOpen ? <LineChart /> : null}</div>
	)
}

export default SnackBar;


