import { Reducer } from 'redux';

import {
	isActionSetAngleRads,
	isActionSetRotationValue,
} from './actions';

export interface ReducerState {
	angleRads: null | number;
	rotationValue: null | string;
}

const DEFAULT_STATE: ReducerState = {
	angleRads: null,
	rotationValue: '0',
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetAngleRads(action)) {
		return {
			...state,
			angleRads: action.data.rads,
			rotationValue: null,
		};
	}

	if (isActionSetRotationValue(action)) {
		return {
			...state,
			angleRads: null,
			rotationValue: action.data.value,
		};
	}

	return state;
};

export default reducer;

export const hasAngleRads = (state: ReducerState): boolean => (
	state.angleRads !== null
);

export const getAngleRads = (state: ReducerState): null | number => (
	state.angleRads
);

export const hasRotationValue = (state: ReducerState): boolean => (
	state.rotationValue !== null
);

export const getRotationValue = (state: ReducerState): null | string => (
	state.rotationValue
);

export const shouldAnimate = (state: ReducerState): boolean => (
	hasRotationValue(state)
);

export const currentRotation = (state: ReducerState): string => (
	hasAngleRads(state) ?
		getAngleRads(state) + 'rad' :
		getRotationValue(state) as string
);
