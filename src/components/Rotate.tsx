import * as React from 'react';
import './Rotate.css';

export interface RotateProps {
	value: string;
	onChange: (value: string) => void;
}

const Rotate: React.StatelessComponent<RotateProps> = ({ value, onChange }) => (
	<div className="Rotate">
		<label>
			<code>
				rotate(
				<input
					type="text"
					value={value}
					onChange={(e) => onChange(e.currentTarget.value)}
				/>
				)
			</code>
		</label>
	</div>
);

export default Rotate;
