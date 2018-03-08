import * as React from 'react';
import ExampleButton from '../containers/ExampleButton';
import './Examples.css';

export interface ExamplesProps {

}

const Examples: React.StatelessComponent<ExamplesProps> = () => (
	<div className="Examples">
		<h2 className="Examples-heading">Examples</h2>

		<section className="Examples-section">
			<h3 className="Examples-subheading"><code>deg</code></h3>
			<ExampleButton value="45deg" />
			<ExampleButton value="90deg" />
			<ExampleButton value="360deg" />
			<ExampleButton value="-45deg" />
		</section>

		<section className="Examples-section">
			<h3 className="Examples-subheading"><code>grad</code></h3>
			<ExampleButton value="50grad" />
			<ExampleButton value="100grad" />
			<ExampleButton value="400grad" />
			<ExampleButton value="-50grad" />
		</section>

		<section className="Examples-section">
			<h3 className="Examples-subheading"><code>rad</code></h3>
			<ExampleButton value="1rad" />
			<ExampleButton value="3.142rad" />
			<ExampleButton value="6.283rad" />
			<ExampleButton value="-1.571rad" />
		</section>

		<section className="Examples-section">
			<h3 className="Examples-subheading"><code>turn</code></h3>
			<ExampleButton value="0.25turn" />
			<ExampleButton value="0.50turn" />
			<ExampleButton value="1.00turn" />
			<ExampleButton value="-0.25turn" />
		</section>
	</div>
);

export default Examples;
