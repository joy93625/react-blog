import styled from "styled-components";
import React, { useState, useContext } from "react";
import { getMe, register } from "../../WebAPI";
import { setAuthToken } from "../../Utils";
import { AuthContext } from "../../contexts";
import { useHistory } from "react-router-dom";

const RegisterContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 80px;
  border: 1px solid #333;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
`;
const RegisterInput = styled.div`
  padding: 8px;
`;
const Button = styled.button``;

const Error = styled.div`
  color: red;
`;

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    setErrorMessage(null);
    if (!username || !password || !nickname) {
      return setErrorMessage("請填寫完整資料");
    }
    register(nickname, username, password).then((data) => {
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
    <RegisterContainer>
      {errorMessage && <Error>{errorMessage}</Error>}
      <form onSubmit={handleSubmit}>
        <RegisterInput>
          nickname:
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </RegisterInput>
        <Button>註冊</Button>
      </form>
    </RegisterContainer>
  );
}
