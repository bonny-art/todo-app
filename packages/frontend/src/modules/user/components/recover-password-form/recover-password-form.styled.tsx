import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;

	padding: 20px;

	button {
		display: block;
		font-family: ${fonts.inter};
		margin-left: auto;
	}
`;

export const inputContainer = css`
	position: relative;
	margin-bottom: 20px;

	.error-styled {
		position: absolute;
		bottom: -16px;
		left: 0;

		color: ${colors.bostonUniversityRed};
		font-size: 12px;
	}

	button {
		border: none;
		background-color: transparent;
		position: absolute;
		top: 7px;
		right: 5px;
	}
`;

export const input = css`
	width: 100%;
	font-family: ${fonts.interBold};

	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;
	padding: 5px;
`;
