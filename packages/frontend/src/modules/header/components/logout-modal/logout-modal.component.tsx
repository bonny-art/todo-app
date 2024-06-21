import { Button } from '@blueprintjs/core';
import React from 'react';
import { useUserStore } from '~store/user.store';
import { logoutConfirmationContainerStyled } from './logout-modal.styled';

export const LogoutConfirmation = ({ closeModal }): JSX.Element => {
	const userStore = useUserStore();

	const onConfirm = (): void => {
		userStore.logoutUser();
		closeModal();
	};

	return (
		<div className={logoutConfirmationContainerStyled}>
			<h2>Are you sure you want to log out?</h2>

			<div className="modal-buttons">
				<Button onClick={closeModal}>Cancel</Button>
				<Button onClick={onConfirm}>Log Out</Button>
			</div>
		</div>
	);
};
