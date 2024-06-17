import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const modalStyled = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 728px;
	max-width: 80%;

	padding: 20px;

	background-color: ${colors.white};
	border-radius: 5px;

	z-index: 2;

	position: relative;
`;

export const closeButton = css`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 20px;
	right: 20px;

	background-color: transparent;
	border: 1px solid transparent;

	width: 25px;
	height: 25px;

	cursor: pointer;
	z-index: 2;

	svg {
		width: 25px;
		height: 25px;
	}
`;
