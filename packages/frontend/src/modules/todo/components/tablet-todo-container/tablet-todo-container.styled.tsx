import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const buttonStyled = css`
	margin-bottom: 20px;

	display: block;
	margin-left: auto;
	margin-right: auto;

	padding: 20px 50px;

	font-family: ${fonts.inter};
	font-size: 20px;
	padding: 10px 20px;
`;

export const container = css`
	padding: 20px;
	position: relative;
`;
