import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const backdrop = css`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${colors.blackSemitranparent};
	z-index: 3;
`;
