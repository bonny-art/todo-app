import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const cardStyled = css`
	h5,
	p {
		word-wrap: break-word;
	}

	h5 {
		margin-bottom: 10px;
	}
`;

export const controlsContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const buttonsContainer = css`
	display: flex;
	gap: 10px;
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
