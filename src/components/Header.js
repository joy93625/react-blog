import styled from "styled-components";
import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts";
import { setAuthToken } from "../Utils";

const HeaderContainer = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  padding: 0 32px;
  align-items: center;
  box-sizing: border-box;
`;
const NavbarList = styled.div`
  display: flex;
`;
const LeftContainner = styled.div`
  display: flex;

  ${NavbarList} {
    margin-left: 64px;
  }
`;
const Banner = styled(Link)`
  font-size: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const Nav = styled(Link)`
  height: 64px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 0, 0, 0.2);
  `}
`;

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const handleLogoout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <HeaderContainer>
      <LeftContainner>
        <Banner to="/">部落格</Banner>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            首頁
          </Nav>
          {user && (
            <Nav to="/new-post" $active={location.pathname === "/new-post"}>
              發布文章
            </Nav>
          )}
        </NavbarList>
      </LeftContainner>
      <NavbarList>
        {!user && (
          <Nav to="/login" $active={location.pathname === "/login"}>
            登入
          </Nav>
        )}
        {!user && (
          <Nav to="/register" $active={location.pathname === "/register"}>
            註冊
          </Nav>
        )}
        {user && <Nav onClick={handleLogoout}>登出</Nav>}
      </NavbarList>
    </HeaderContainer>
  );
}
