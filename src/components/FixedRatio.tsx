import * as React from 'react';
import './FixedRatio.css';

export interface FixedRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Height:Width ratio. `2` is a box twice as tall as it is wide. */
	ratio?: number | null;
}

const FixedRatio: React.StatelessComponent<FixedRatioProps> = ({ ratio, children, ...props }) => (
	<div className="FixedRatio">
		<div className="FixedRatio-middle" style={{ paddingTop: (ratio || 1) * 100 + '%' }}>
			<div className="FixedRatio-inner">
				{children}
			</div>
		</div>
	</div>
);

export default FixedRatio;
