import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Category = () => {
  const navigate = useNavigate();
  return (
    <SCategory>
      <div onClick={() => navigate("/")}>데이트 보기</div>
      <div>한줄 평 모음</div>
      <div>업체예약</div>
      <div>이벤트</div>
    </SCategory>
  );
};

export default Category;
