import React, { useState } from "react";
import Map from "./Map";
import styled from "styled-components";

const SInputForm = styled.form`
  margin: 2rem;
`;
const LandingPage = () => {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <SInputForm onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </SInputForm>
      <Map searchPlace={Place} />
    </>
  );
};

export default LandingPage;
