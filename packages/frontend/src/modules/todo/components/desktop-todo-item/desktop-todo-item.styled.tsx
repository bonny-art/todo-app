import { css } from '@emotion/css';
import { colors } from '~shared/styles';

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
