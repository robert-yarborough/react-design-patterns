import React from 'react';
import { AppProvider, ChartProvider } from '../common/';
// sub-components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

const App = () => (
			<AppProvider>
				<Header />{/* exported with hoc wrapped in AppContext.Consumer, so props are passed to it */}
				<ChartProvider>
					<Content />
				</ChartProvider>
				<Footer />{/* exported with hoc wrapped in AppContext.Consumer so props are passed to it */}
			</AppProvider>
		);

export default App;
