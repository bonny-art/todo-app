import { css } from '@emotion/css';

export const backdrop = css`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
`;
