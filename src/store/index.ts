import { Reducer } from 'redux';

import {
	isActionSetAngleRads,
	isActionSetRotationValue,
} from './actions';

type Unit = 'deg' | 'grad' | 'rad' | 'turn';

export interface ReducerState {
	angleRads: null | number;
	rotationValue: null | string;
	preferredUnits: Unit;
}

const DEFAULT_STATE: ReducerState = {
	angleRads: null,
	rotationValue: '',
	preferredUnits: 'deg',
};

const unitExp = /(deg|grad|rad|turn)\s*$/i;
const getUnits = (input: string): Unit | null => {
	const match = input.match(unitExp);
	if (match) {
		return match[1].toLowerCase() as Unit;
	} else {
		return null;
	}
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
		const rotationValue = action.data.value;
		const preferredUnits = getUnits(action.data.value) || state.preferredUnits;

		return {
			...state,
			angleRads: null,
			rotationValue,
			preferredUnits,
		};
	}

	return state;
};

export default reducer;

const roundToNearest = (value: number, nearest: number): number => (
	Math.round(value / nearest) * nearest
);

const radToGrad = (rad: number): number => rad * 200 / Math.PI;
const radToDeg = (rad: number): number => rad * 180 / Math.PI;
const radToTurn = (rad: number): number => rad * 0.5 / Math.PI;

export const hasAngleValue = (state: ReducerState): boolean => (
	state.angleRads !== null
);

export const getAngleRad = (state: ReducerState): null | number => (
	state.angleRads
);

export const getAngleRadFormatted = (state: ReducerState): null | string => (
	state.angleRads === null ? null :
		Number(roundToNearest(state.angleRads, 0.001).toFixed(3)) + 'rad'
);

export const getAngleGrad = (state: ReducerState): null | number => (
	state.angleRads === null ? null :
		state.angleRads * (200 / Math.PI)
);

export const getAngleGradFormatted = (state: ReducerState): null | string => (
	state.angleRads === null ? null :
		roundToNearest(radToGrad(state.angleRads), 1) + 'grad'
);

export const getAngleDeg = (state: ReducerState): null | number => (
	state.angleRads === null ? null :
		state.angleRads * (180 / Math.PI)
);

export const getAngleDegFormatted = (state: ReducerState): null | string => (
	state.angleRads === null ? null :
		roundToNearest(radToDeg(state.angleRads), 1) + 'deg'
);

export const getAngleTurn = (state: ReducerState): null | number => (
	state.angleRads === null ? null :
		state.angleRads * (0.5 / Math.PI)
);

export const getAngleTurnFormatted = (state: ReducerState): null | string => (
	state.angleRads === null ? null :
		Number(roundToNearest(radToTurn(state.angleRads), 0.001).toFixed(3)) + 'turn'
);

export const getAnglePreferredUnitFormatted = (state: ReducerState): null | string => (
	state.angleRads === null ? null :
		state.preferredUnits === 'deg' ? getAngleDegFormatted(state) :
		state.preferredUnits === 'rad' ? getAngleRadFormatted(state) :
		state.preferredUnits === 'grad' ? getAngleGradFormatted(state) :
		state.preferredUnits === 'turn' ? getAngleTurnFormatted(state) :
		getAngleDegFormatted(state)
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

export const currentRotationValue = (state: ReducerState): string => (
	hasAngleValue(state) ?
		getAngleRad(state) + 'rad' :
		getRotationValue(state) as string
);

export const currentRotationFormatted = (state: ReducerState): string => (
	hasAngleValue(state) ?
		getAnglePreferredUnitFormatted(state) as string :
		getRotationValue(state) as string
);
