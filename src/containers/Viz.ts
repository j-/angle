import { connect } from 'react-redux';
import Viz from '../components/Viz';
import { setAngleRads } from 'src/store/actions';

import {
	ReducerState,
	shouldAnimate,
	currentRotationValue,
} from 'src/store';

interface StateProps {
	animate: boolean;
	rotate: string;
}

interface DispatchProps {
	onChangeAngle: (rads: number) => void;
}

interface OwnProps {
	width: number;
	height: number;
}

const mapStateToProps = (state: ReducerState) => ({
	animate: shouldAnimate(state),
	rotate: currentRotationValue(state),
});

const mapDispatchToProps = {
	onChangeAngle: setAngleRads,
};

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(Viz);
