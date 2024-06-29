import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useUserStore } from '~store/user.store';

const EmailVerificationPage = (): JSX.Element => {
	const { token } = useParams();

	const navigate = useNavigate();
	const userStore = useUserStore();

	useEffect(() => {
		const verifyUser = async (): Promise<void> => {
			try {
				await userStore.verificateUser(token);

				navigate(ROUTER_KEYS.LOGIN);

				Notify.success(
					'Your account has been verified successfully. You can now login.',
				);
			} catch (error) {
				navigate(ROUTER_KEYS.REGISTER);
			}
		};

		verifyUser();
	}, [navigate, token]);

	return null;
};

export default EmailVerificationPage;
