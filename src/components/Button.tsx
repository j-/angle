import * as React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.StatelessComponent<ButtonProps> = (props) => (
	<button className="Button" type="button" {...props} />
);

export default Button;
