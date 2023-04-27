import { ReactComponent as Logo } from "../image/Logo.svg";
import styled from "styled-components";

const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SLogoTitle = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;
const SLoginBtn = styled.button`
  width: 65px;
  height: 30px;
  margin-right: 20px;
`;
const SSingUpBtn = styled.button`
  width: 65px;
  height: 30px;
`;
const SSearchBar = styled.input`
  width: 467px;
  height: 44px;
  align-items: center;
  margin: 0px;
`;

const Header = () => {
  return (
    <SHeaderContainer>
      <Logo />
      <SLogoTitle>Foot-Mark</SLogoTitle>
      <SSearchBar></SSearchBar>
      <SLoginBtn>로그인</SLoginBtn>
      <SSingUpBtn>회원가입</SSingUpBtn>
    </SHeaderContainer>
  );
};

export default Header;
