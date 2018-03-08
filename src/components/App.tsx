import * as React from 'react';
import Viz from '../containers/Viz';
import Rotate from '../containers/Rotate';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Viz width={200} height={200} />
		<Rotate />
	</div>
);

export default App;
