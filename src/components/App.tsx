import * as React from 'react';
import Viz from '../containers/Viz';
import Rotate from '../containers/Rotate';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<div className="App-viz">
			<Viz width={200} height={200} />
		</div>
		<div className="App-config">
			<Rotate />
		</div>
	</div>
);

export default App;
