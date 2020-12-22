import styled from "styled-components";
import React, { useState, useContext } from "react";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../Utils";
import { AuthContext } from "../../contexts";

import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 80px;
  border: 1px solid #333;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
`;
const LoginInput = styled.div`
  padding: 8px;
`;
const Button = styled.button``;

const Error = styled.div`
  color: red;
`;

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    setErrorMessage(null);
    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);
      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };
  return (
    <LoginContainer>
      {errorMessage && <Error>{errorMessage}</Error>}
      <form onSubmit={handleSubmit}>
        <LoginInput>
          username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </LoginInput>
        <LoginInput>
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginInput>
        <Button>登入</Button>
      </form>
    </LoginContainer>
  );
}
