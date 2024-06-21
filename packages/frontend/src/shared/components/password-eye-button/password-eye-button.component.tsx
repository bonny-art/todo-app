import React from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { PasswordEyeButtonStyled } from './password-eye-button.styled';

type PasswordEyeButtonProps = {
	showPassword: boolean;
	handleTogglePassword: () => void;
};

const PasswordEyeButton = ({
	showPassword,
	handleTogglePassword,
}: PasswordEyeButtonProps): JSX.Element => {
	return (
		<button
			className={PasswordEyeButtonStyled}
			onClick={handleTogglePassword}
		>
			{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
		</button>
	);
};

export default PasswordEyeButton;
