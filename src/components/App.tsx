import * as React from 'react';
import FixedRatio from './FixedRatio';
import Viz from '../containers/Viz';
import Rotate from '../containers/Rotate';
import Examples from './Examples';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<div className="App-viz">
			<FixedRatio>
				<Viz />
			</FixedRatio>
		</div>
		<div className="App-config">
			<Rotate />
		</div>
		<div className="App-examples">
			<Examples />
		</div>
	</div>
);

export default App;
