import { Action, ActionCreator } from 'redux';

export interface ActionSetRotationValue extends Action {
	type: 'SetRotationValue';
	data: {
		value: string;
	};
}

export const isActionSetRotationValue = (action: Action): action is ActionSetRotationValue => (
	action.type === 'SetRotationValue'
);

export const setRotationValue: ActionCreator<ActionSetRotationValue> = (value: string) => ({
	type: 'SetRotationValue',
	data: {
		value,
	},
});

export interface ActionSetAngleRads extends Action {
	type: 'SetAngleRads';
	data: {
		rads: number;
	};
}

export const isActionSetAngleRads = (action: Action): action is ActionSetAngleRads => (
	action.type === 'SetAngleRads'
);

export const setAngleRads: ActionCreator<ActionSetAngleRads> = (rads: number) => ({
	type: 'SetAngleRads',
	data: {
		rads,
	},
});
