import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import Button from '../components/Button';
import { setRotationValue } from 'src/store/actions';

interface DispatchProps {
	onClick: () => void;
}

interface OwnProps {
	value: string;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, props: OwnProps) => ({
	onClick: () => dispatch(setRotationValue(props.value)),
});

const mergeProps = (stateProps: void, dispatchProps: DispatchProps, props: OwnProps) => ({
	onClick: dispatchProps.onClick,
	children: props.value,
});

export default connect<void, DispatchProps, OwnProps>(
	null,
	mapDispatchToProps,
	mergeProps,
)(Button);
