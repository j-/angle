import { connect } from 'react-redux';
import Rotate from '../components/Rotate';
import { setRotationValue } from 'src/store/actions';

import {
	ReducerState,
	currentRotation,
} from 'src/store';

interface StateProps {
	value: string;
}

interface DispatchProps {
	onChange: (value: string) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: currentRotation(state),
});

const mapDispatchToProps = {
	onChange: setRotationValue,
};

export default connect<StateProps, DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
)(Rotate);
