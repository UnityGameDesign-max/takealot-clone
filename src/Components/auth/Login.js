import {Fragment} from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import styled from "styled-components";

function Login(){
    return (
        <Fragment>
        <TextField
          id="standard-basic"
          label="Email Address"
          fullWidth
          variant="standard"
          sx={{ mb: 3}}
        />
        <ForgotPasswordLink to="/">Forgot Password?</ForgotPasswordLink>
        <TextField
          id="standard-basic"
          label="Password"
          fullWidth
          variant="standard"
          sx={{ mb: 3}}
        />
      </Fragment>
    )
}

const ForgotPasswordLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: #0b79bf;
  margin-bottom: 5px;
  float: right;
  font-size: 0.8rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
export default Login;