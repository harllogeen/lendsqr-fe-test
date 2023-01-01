import { Alert, Button, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
`;

const Logo = styled(Box)`
  width: 160px;
  margin-left: 97px;
  margin-top: 90px;
`;

const FlexContainer = styled(Box)`
  display: flex;
  gap: 169px;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const ImgBox = styled(Box)`
  width: 40%;
  @media only screen and (max-width: 960px){
    display: none;
  }
`;

const FormContainer = styled(Box)`
  h1 {
    font-size: 40px;
    font-weight: 700;
    color: var(--title-color);
  }

  .text1 {
    font-size: 20px;
    font-weight: 400;
    color: var(--title-color);
    margin-bottom: 60px;
  }
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;

  .link {
    margin-bottom: 30px;
    color: var(--primary);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    letter-spacing: 0.1em;
  }
`;

const Input = styled("input")`
  :not(.password-input) {
    outline: none;
    background: #ffffff;
    width: 447px;
    padding-right: 10px;
    padding-left: 10px;
    height: 50px;
    border: 2px solid rgba(84, 95, 125, 0.15);
    border-radius: 5px;
    margin-bottom: 24px;

    @media screen and (max-width: 540px) {
      width: 250px;
    }
  }

  ::placeholder {
    font-size: 14px;
    color: #545f7d;
    font-weight: 400;
  }
`;

const Password = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  width: 447px;
  padding-right: 10px;
  padding-left: 10px;
  height: 50px;
  border: 2px solid rgba(84, 95, 125, 0.15);
  border-radius: 5px;
  margin-bottom: 24px;

  .password-input {
    outline: none;
    border: none;
    width: 100%;
    height: 40px;
    margin-right: 20px;
  }

  span {
    color: var(--primary);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    cursor: pointer;
  }

  @media screen and (max-width: 540px) {
    width: 250px;
  }
`;

const Submit = styled(Button)`
  height: 48px;
  width: 447px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1em;
  background: var(--primary);
  border-radius: 8px;
  box-shadow: none;

  :hover {
    background: var(--primary);
    box-shadow: none;
  }

  @media screen and (max-width: 540px) {
    width: 250px;
  }
`;

const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [showErrorToast, setShowErrorToast] = React.useState(false);

  const handleClose = () => {
    setShowErrorToast(false);
  };

  const submitForm = (e:React.FormEvent) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      navigate("/dashboard");
    } else {
      setShowErrorToast(true);
    }
  };

  const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <SigninWrapper>
      <Logo>
        <img src="/assets/logo.svg" alt="logo" />
      </Logo>

      <FlexContainer>
        <ImgBox>
          <img src="/assets/pablo-sign-in.svg" alt="sign-in" />
        </ImgBox>

        <FormContainer>
          <h1>Welcome!</h1>
          <p className="text1">Enter details to login.</p>

          <Form onSubmit={submitForm}>
            <Input
              name="email"
              type="email"
              onChange={onInputChanged}
              placeholder="Email"
            />
            <Password>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={onInputChanged}
                className="password-input"
                placeholder="Password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {!showPassword ? "SHOW" : "HIDE"}
              </span>
            </Password>
            <a href="#" className="link">FORGOT PASSWORD?</a>
            <Submit variant="contained" type="submit">
              LOG IN
            </Submit>
          </Form>

          <Snackbar open={showErrorToast} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{
                  width: "100%",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Enter email and password to login
              </Alert>
          </Snackbar>
        </FormContainer>
      </FlexContainer>
    </SigninWrapper>
  );
};

export default Signin;