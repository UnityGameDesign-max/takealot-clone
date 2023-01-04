
import { Fragment, useState } from 'react';
import { boxModalStyle } from './authStyles';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signUp } from '../../services/firebaseAuth';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import LoadingBackDrop from '../LoadingBackDrop';
import {  toast } from 'react-toastify';
import { ERROR_REGISTRATION_MESSAGE, RegistrationToastObj, SUCCESS_REGISTRATION_MESSAGE } from '../../utilis/constants';

function RegisterUser({openModal, setOpenModal, setOpenLoginModal}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => setOpenModal(!openModal);
  const handleLoginModal = () => {
    setOpenModal(!openModal);
    setOpenLoginModal(openModal);
  }
  const handleSignUp = () => {
    setIsLoading(true);
    signUp(email, password)
      .then(() => {
        setIsLoading(false);
        toast.success(SUCCESS_REGISTRATION_MESSAGE,
        RegistrationToastObj)
        handleCloseModal();
      }).catch(() => {
        setIsLoading(false);
        toast.error(ERROR_REGISTRATION_MESSAGE, RegistrationToastObj)
      });

  }
  const RegisterField = (
    <Fragment>
            <Box sx={boxModalStyle}>
                <CloseIcon onClick={handleCloseModal} sx={{float: 'right', cursor: 'pointer' , mt: 2.3}} />
                <ModalTitle>Register</ModalTitle>
                <TextField
                    id="standard-basic"
                    label="Email Address"
                    fullWidth
                    type='text'
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    variant="standard"
                    sx={{ mb: 3}}
                />
    
                <TextField
                    id="standard-basic"
                    label="Password"
                    fullWidth
                    type='password'
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton>
                            <VisibilityOff />
                            </IconButton>
                        </InputAdornment>
                    }
                    variant="standard"
                    sx={{ mb: 3}}
                />
                <AuthButton onClick={handleSignUp}>Register</AuthButton>
                <LinkContainer>
                    <LinkQuestion>Already have an Account?</LinkQuestion>
                    <LinkToAuth onClick={handleLoginModal}>Login</LinkToAuth>
                </LinkContainer>
            </Box>
        </Fragment>
  )
  return (
    <Fragment>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-form"
        aria-describedby="modal-modal-description"
      >
      {!isLoading ?  
        RegisterField
    : 
        <BackDropLoadContainer>
            {RegisterField}
            <LoadingBackDrop openBackDrop={openModal}/>
        </BackDropLoadContainer>
    }
      </Modal>
    </Fragment>
  )
}
const BackDropLoadContainer = styled.div`
    position: relative;
    top: 50%;
`;

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
export default RegisterUser;