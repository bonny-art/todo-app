import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const PageContainerStyled = css`
	max-width: 375px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	padding: 20px;
`;

export const linksWrapper = css`
	display: flex;
	justify-content: space-between;

	margin-top: 20px;

	a {
		color: ${colors.blackSemitranparent};
	}
`;
