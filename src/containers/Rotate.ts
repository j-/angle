import { connect } from 'react-redux';
import Rotate from '../components/Rotate';
import { setRotationValue } from 'src/store/actions';

import {
	ReducerState,
	currentRotationFormatted,
} from 'src/store';

interface StateProps {
	value: string;
}

interface DispatchProps {
	onChange: (value: string) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: currentRotationFormatted(state),
});

const mapDispatchToProps = {
	onChange: setRotationValue,
};

export default connect<StateProps, DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
)(Rotate);
