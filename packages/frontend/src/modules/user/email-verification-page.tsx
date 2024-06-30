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
			const isSuccessful = await userStore.verificateUser(token);

			if (isSuccessful) {
				navigate(ROUTER_KEYS.HOME);
			} else {
				navigate(ROUTER_KEYS.REGISTER);
			}
		};

		verifyUser();
	}, [navigate, token]);

	return null;
};

export default EmailVerificationPage;
