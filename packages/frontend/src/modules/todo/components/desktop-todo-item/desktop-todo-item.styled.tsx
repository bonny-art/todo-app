import { css } from '@emotion/css';

export const getToggleButtonStyle = (isCompleted: boolean): string => css`
	color: ${isCompleted ? 'green' : 'red'};
`;
