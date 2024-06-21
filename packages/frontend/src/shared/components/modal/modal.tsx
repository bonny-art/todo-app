import React from 'react';
import ReactDOM from 'react-dom';

import { IoClose } from 'react-icons/io5';

import { ModalContainer } from '~shared/components/modal-container/modal-container';
import { closeButton, modalStyled } from './modal.styled';

export const Modal = ({ closeModal, children }): JSX.Element => {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalContainer onClose={closeModal}>
					<div className={modalStyled}>
						<button className={closeButton} onClick={closeModal}>
							<IoClose />
						</button>

						{children}
					</div>
				</ModalContainer>,
				document.getElementById('modal-root'),
			)}
		</>
	);
};
