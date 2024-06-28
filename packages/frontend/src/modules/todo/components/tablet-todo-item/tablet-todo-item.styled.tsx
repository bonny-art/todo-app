import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const cardContainer = css`
	padding: 5px 11vw 30px;
`;

export const cardStyled = css`
	&:hover {
		box-shadow:
			0 0 0 1px rgba(17, 20, 24, 0.1),
			0 2px 4px rgba(17, 20, 24, 0.2),
			0 8px 24px rgba(17, 20, 24, 0.2);
	}
`;

export const titleStyled = css`
	font-family: ${fonts.interBold};
	font-size: 17px;
	word-wrap: break-word;
	margin-bottom: 20px;
`;

export const descriptionStyled = css`
	font-family: ${fonts.inter};
	font-size: 20px;
	height: 308px;
	word-wrap: break-word;
	overflow-y: auto;
`;

export const controlsContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.switch {
		margin-bottom: 0;

		display: flex;
		flex-direction: row-reverse;
		align-items: baseline;

		font-size: 20px;
		font-family: ${fonts.inter};

		&.bp5-control.bp5-disabled {
			cursor: default;
		}
	}
`;

export const buttonsContainer = css`
	display: flex;
	gap: 10px;
`;

export const button = css`
	font-family: ${fonts.inter};
	font-size: 20px;
	padding: 10px 20px;
`;

export const switchStyled = css`
	&.bp5-control.bp5-switch input:disabled ~ .bp5-control-indicator {
		cursor: default;
	}

	&.bp5-control.bp5-switch input:focus ~ .bp5-control-indicator {
		outline: none;
	}

	&.bp5-control.bp5-switch input:checked ~ .bp5-control-indicator {
		background: ${colors.bostonUniversityRed};
	}
`;
