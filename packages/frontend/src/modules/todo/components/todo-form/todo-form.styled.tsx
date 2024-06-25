import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	button {
		font-family: ${fonts.inter};
	}
`;

export const inputContainer = css`
	position: relative;
	margin-bottom: 20px;

	.error-styled {
		position: absolute;
		bottom: -11px;
		left: 0;

		color: ${colors.bostonUniversityRed};
		font-size: 12px;
	}
`;

export const titleInput = css`
	width: calc(100% - 40px);

	word-wrap: break-word;
	font-family: ${fonts.interBold};
	height: 81px;

	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;
	padding: 5px;
	resize: none;

	&:focus {
		outline: none;
		border-color: ${colors.bostonUniversityRed};
	}
`;

export const descriptionInput = css`
	width: 100%;

	word-wrap: break-word;
	font-family: ${fonts.inter};

	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;
	padding: 5px;
	resize: none;

	height: 170px;

	&:focus {
		outline: none;
		border-color: ${colors.bostonUniversityRed};
	}
`;

export const radioInput = css`
	display: flex;
	gap: 40px;

	font-family: ${fonts.inter};
	margin-bottom: 20px;

	label {
		display: flex;
		gap: 10px;
		cursor: pointer;

		&:focus,
		:active {
			outline: none;
		}

		& input[type='radio' i]:checked {
			accent-color: ${colors.bostonUniversityRed} !important;
		}
	}
`;
