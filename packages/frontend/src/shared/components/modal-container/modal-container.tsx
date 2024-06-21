import React, { useEffect } from 'react';

import { backdrop } from './modal-container.styled';
import { ModalContainerProps } from '~shared/types/todo.type';

export const ModalContainer = ({
	onClose,
	children,
}: ModalContainerProps): JSX.Element => {
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		document.documentElement.style.overflow = 'hidden';

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			document.documentElement.style.overflow = 'visible';
		};
	});

	const handleKeyDown = (e: KeyboardEvent): void => {
		if (e.code === 'Escape') {
			onClose();
		}
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div className={backdrop} onClick={handleBackdropClick}>
			{children}
		</div>
	);
};
