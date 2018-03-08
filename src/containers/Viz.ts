import { connect } from 'react-redux';
import Viz from '../components/Viz';

import {
	ReducerState,
	shouldAnimate,
	currentRotation,
} from 'src/store';

interface StateProps {
	animate: boolean;
	rotate: string;
}

interface OwnProps {
	width: number;
	height: number;
}

const mapStateToProps = (state: ReducerState) => ({
	animate: shouldAnimate(state),
	rotate: currentRotation(state),
});

export default connect<StateProps, void, OwnProps>(
	mapStateToProps,
)(Viz);
