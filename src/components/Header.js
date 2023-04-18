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
  margin-left: 80%;
  margin-right: 20px;
`;
const SSingUpBtn = styled.button`
  width: 65px;
  height: 30px;
`;

const Header = () => {
  return (
    <SHeaderContainer>
      <Logo />
      <SLogoTitle>Foot-Mark</SLogoTitle>
      <SLoginBtn>로그인</SLoginBtn>
      <SSingUpBtn>회원가입</SSingUpBtn>
    </SHeaderContainer>
  );
};

export default Header;
