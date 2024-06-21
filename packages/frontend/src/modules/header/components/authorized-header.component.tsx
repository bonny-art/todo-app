import { Button } from '@blueprintjs/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useUserStore } from '~store/user.store';
import { headerStyled } from './header.styled';
import { Modal } from '~shared/components/modal/modal';
import { LogoutConfirmation } from './logout-modal/logout-modal.component';
import ProfileForm from './profile-form/profile-form.component';
import ProfileCard from './profile-card/profile-card.component';

export function AuthorizedHeader(): JSX.Element {
	const userStore = useUserStore();
	const isEdited = userStore.isEdited;

	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

	const openLogoutModal = (): void => {
		setIsLogoutModalOpen(true);
	};

	const closeLogoutModal = (): void => {
		setIsLogoutModalOpen(false);
	};

	const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

	const openProfileModal = (): void => {
		setIsProfileModalOpen(true);
	};

	const closeProfileModal = (): void => {
		setIsProfileModalOpen(false);
	};

	const handleSaveClick = (): void => {
		userStore.setIsEditedFalse();
	};

	const handleUpdateClick = (): void => {
		userStore.setIsEditedTrue();
	};

	return (
		<header className={headerStyled}>
			<Link to={ROUTER_KEYS.DASHBOARD}>Todos</Link>
			<div>
				<Button onClick={openLogoutModal}>Logout</Button>
				<Button onClick={openProfileModal}>
					{userStore.user.name}
				</Button>
			</div>

			{isLogoutModalOpen && (
				<Modal closeModal={closeLogoutModal}>
					<LogoutConfirmation closeModal={closeLogoutModal} />
				</Modal>
			)}

			{isProfileModalOpen && (
				<Modal closeModal={closeProfileModal}>
					{isEdited ? (
						<ProfileForm onSaveClick={handleSaveClick} />
					) : (
						<ProfileCard onUpdateClick={handleUpdateClick} />
					)}
				</Modal>
			)}
		</header>
	);
}
