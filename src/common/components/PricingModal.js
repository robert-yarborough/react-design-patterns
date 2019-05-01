import React from 'react';


function PricingModal(props) {
	return (
		<div>
			<div>{props.open ? <h1>Pricing Modal</h1> : null}</div>
		</div>
	);
}

export default PricingModal;