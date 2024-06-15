import { css } from '@emotion/css';

export const modalStyled = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	gap: 24px;

	max-width: 982px;
	height: 746px;
	padding: 20px;

	background-color: white;
	border-radius: 20px;

	z-index: 2;
`;
