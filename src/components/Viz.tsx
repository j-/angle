import * as React from 'react';

export interface VizProps {
	width: number;
	height: number;
	animate: boolean;
	rotate: string;
}

const Viz: React.StatelessComponent<VizProps> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		style={{
			width: props.width,
			height: props.height,
		}}
	>
		<circle cx="50" cy="50" r="49" fill="none" stroke="#888" />
		<g transform="translate(45, 0)">
			<g
				fill="none"
				stroke="#000"
				transform-origin="bottom center"
				style={{
					transform: `rotate(${props.rotate})`,
					transition: props.animate ? 'transform 0.5s ease-out' : '',
				}}
			>
				<polyline points="0 10 5 0 10 10" />
				<line x1="5" y1="0" x2="5" y2="50" />
			</g>
		</g>
	</svg>
);

export default Viz;
