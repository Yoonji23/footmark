import Calendar from "../components/Calendar";
import styled from "styled-components";
import { ReactComponent as CalendarImg } from "../image/CalendarImg.svg";
import { useState } from "react";

const SCalendarDate = styled.div`
  display: flex;
  flex-direction: row;
`;
const SContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const DateNotes = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const localeDate = `${year}-${month}-${day}`;
  return (
    <>
      <SCalendarDate>
        <Calendar
          localeDate={localeDate}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
        <CalendarImg onClick={handleOpenModal} />
      </SCalendarDate>
      <SContentBox>
        <input placeholder="제목을 입력하세요"></input>
        <textarea placeholder="오늘의 데이트를 기록해보세요."></textarea>
      </SContentBox>
      <button>저장</button>
    </>
  );
};

export default DateNotes;
