import {Fragment} from 'react';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const boxModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    paddingInline: 4,
    paddingBlock: 2
  };

function AuthenticationModal({
    openModal,
    handleCloseModal,
    modalTitle,
    modalTextFields,
    modalButtonText,
    typeOfAuthQuestion,
    typeOfAuthLink,
    }) {

        
    return (
        <Fragment>
            <Modal
                open={openModal}
                aria-labelledby="modal-modal-form"
                aria-describedby="modal-modal-description"
            >
                <Fragment>
                    <Box sx={boxModalStyle}>
                        <CloseIcon sx={{float: 'right', cursor: 'pointer' , mt: 2.3}} onClick={handleCloseModal}/>
                        <ModalTitle>{modalTitle}</ModalTitle>
                        {modalTextFields}
                        <Divider />
                        <LinkContainer>
                            <LinkQuestion>{typeOfAuthQuestion}</LinkQuestion>
                            <LinkToAuth>{typeOfAuthLink}</LinkToAuth>
                        </LinkContainer>
                    </Box>
                </Fragment>
            </Modal>
        </Fragment>
    )
}
const LinkQuestion = styled.p`
    margin: 0 7px 0 0;
    color: #707072;
    font-size: 1.01rem;
`;
const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;
const LinkToAuth = styled(Link)`
    text-decoration: none;
    color: #0b79bf;
    &:hover {
        text-decoration: underline;
      }
`;

const ModalTitle = styled.h2`
    margin-bottom: 16px;
    color: #0a0a0a;
    text-align: left;
    font-weight: 500;
`;

export default AuthenticationModal;