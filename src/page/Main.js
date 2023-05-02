import dummy from "../data/dummy.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SDateBox = styled.div`
  border: 1px solid black;
`;
const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      {dummy.dataList.map((date) => (
        <SDateBox key={date.id}>
          <img src={date.img} alt="dateImg"></img>
          <div>{date.title}</div>
          <div>{date.content}</div>
          <div>{date.course}</div>
          <div>좋아요 {date.like}</div>
          <div>관심 {date.interest}</div>
        </SDateBox>
      ))}
      <button onClick={() => navigate("/dateNotes")}>데이트 기록하기</button>
    </div>
  );
};

export default Main;
