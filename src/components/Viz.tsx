import * as React from 'react';
import './Viz.css';

export interface VizProps {
	animate: boolean;
	rotate: string;
	onChangeAngle: (rads: number) => void;
}

export default class Viz extends React.PureComponent<VizProps> {
	private element: SVGElement;

	render () {
		const { animate, rotate } = this.props;

		return (
			<svg
				className="Viz"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				ref={this.assignRef}
			>
				<circle
					className="Viz-circle"
					cx="50"
					cy="50"
					r="49"
					fill="transparent"
					stroke="#888"
					onMouseDown={this.handleMouseDown}
					onTouchStart={this.handleTouchStart}
				/>
				<g
					className="Viz-arrow"
					fill="none"
					stroke="none"
					transform-origin="center"
					style={{
						transform: `rotate(${rotate})`,
						transition: animate ? 'transform 0.5s ease-out' : '',
					}}
				>
					<rect x1="0" y1="0" x2="100" y2="100" />
					<g className="Viz-arrow" fill="none" stroke="#000" transform="translate(45, 0)">
						<polyline points="0 10 5 0 10 10" />
						<line x1="5" y1="0" x2="5" y2="50" />
					</g>
				</g>
			</svg>
		);
	}

	private assignRef = (el: SVGElement | null) => (
		this.element = el as SVGElement
	)

	private handleMouseDown = (e: React.MouseEvent<SVGElement>) => {
		if (e.button !== 0) {
			// Ignore anything but LMB
			return;
		}
		e.preventDefault();
		const bounds = this.element.getBoundingClientRect();
		const centerX = bounds.left + (bounds.right - bounds.left) / 2;
		const centerY = bounds.top + (bounds.bottom - bounds.top) / 2;
		const handler = (e: { clientX: number, clientY: number }) => {
			const offsetX = e.clientX - centerX;
			const offsetY = e.clientY - centerY;
			const rads = Math.atan2(offsetX, offsetY) * -1 + Math.PI;
			this.props.onChangeAngle(rads);
		};
		handler(e);
		document.documentElement.classList.add('rotating');
		window.addEventListener('mousemove', handler);
		window.addEventListener('mouseup', () => {
			document.documentElement.classList.remove('rotating');
			window.removeEventListener('mousemove', handler);
		});
	}

	private handleTouchStart = (e: React.TouchEvent<SVGElement>) => {
		const bounds = this.element.getBoundingClientRect();
		const centerX = bounds.left + (bounds.right - bounds.left) / 2;
		const centerY = bounds.top + (bounds.bottom - bounds.top) / 2;
		const handler = (e: { touches: TouchList }) => {
			const offsetX = e.touches[0].clientX - centerX;
			const offsetY = e.touches[0].clientY - centerY;
			const rads = Math.atan2(offsetX, offsetY) * -1 + Math.PI;
			this.props.onChangeAngle(rads);
		};
		handler(e);
		document.documentElement.classList.add('rotating');
		window.addEventListener('touchmove', handler);
		window.addEventListener('touchend', () => {
			document.documentElement.classList.remove('rotating');
			window.removeEventListener('touchmove', handler);
		});
	}
}
