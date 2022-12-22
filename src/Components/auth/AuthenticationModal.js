import {Fragment} from 'react';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 2,
  };

function AuthenticationModal({
    openModal,
    handleCloseModal,
    modalTitle,
    modalTextFields,
    modalButtonText
    }) {

        
    return (
        <Fragment>
            <Modal
                open={openModal}
                aria-labelledby="modal-modal-form"
                aria-describedby="modal-modal-description"
            >
                <Fragment>
                    <Box sx={style}>
                        <CloseIcon sx={{float: 'right', cursor: 'pointer' , mt: 2.3}} onClick={handleCloseModal}/>
                        <ModalTitle>{modalTitle}</ModalTitle>
                        {modalTextFields}
                        <AuthButton>{modalButtonText}</AuthButton>
                        <Divider />
                    </Box>
                </Fragment>
            </Modal>
        </Fragment>
    )
}
const AuthButton = styled.button`
    width: 100%;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 40px;
    background-color: #0b79bf;
    &:hover {
        background-color: #085B90;
      }
`;
const ModalTitle = styled.h2`
    margin-bottom: 16px;
    color: #0a0a0a;
    text-align: left;

`;
const ModalContainer = styled.div`
    width: 600,
    height: 600,
`;

export default AuthenticationModal;