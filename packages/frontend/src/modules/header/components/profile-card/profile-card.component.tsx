import React from 'react';
import { container } from './profile-card.styled';
import { Button } from '@blueprintjs/core';

import { useUserStore } from '~store/user.store';
import { ProfileCardProps } from '~shared/types/user.type';

const ProfileCard = ({ onUpdateClick }: ProfileCardProps): JSX.Element => {
	const userStore = useUserStore();

	return (
		<div className={container}>
			<h2>{userStore.user.name}</h2>
			<p>{userStore.user.email}</p>

			<Button onClick={onUpdateClick}>Update</Button>
		</div>
	);
};

export default ProfileCard;
