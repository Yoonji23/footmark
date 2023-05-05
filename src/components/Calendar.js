import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const SModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
const SCloseBtn = styled.div`
  font-size: 30px;
  text-align: right;
  cursor: pointer;
`;
const SCalendarModal = styled.div`
  width: 900px;
  height: 90%;
  border: 1px solid black;
  margin: 30px;
  padding: 0px 10px;
  background-color: white;
`;
const SDateBook = styled.div`
  font-size: 20px;
`;

const Calendar = ({ localeDate, showModal, handleCloseModal }) => {
  const calendarRef = useRef(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [data, setDate] = useState();

  const handleEventAdd = (eventAddInfo) => {
    setCalendarEvents([...calendarEvents, eventAddInfo.event]);
  };

  const handleDateClick = (e) => {
    console.log("e", e);
    setDate(e.dateStr);
  };

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent({ title: "Example Event", start: new Date() });
    }
  }, []);

  return (
    <div>
      <div>
        {showModal ? (
          <SModalBackground onClick={handleCloseModal}>
            <SCalendarModal>
              <SCloseBtn onClick={handleCloseModal}>&times;</SCloseBtn>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true} //사용자가 날짜를 선택할 수 있는지 여부
                navLinks={true} // 탐색 링크를 표시할지 여부
                editable={true} //이벤트를 편집할 수 있는지
                nowIndicator={true} //현재시간 표시 여부
                dayMaxEvents={true} //하루에 표시할 최대 이벤트 수 표시 여부
                ref={calendarRef}
                dateClick={handleDateClick}
                events={calendarEvents}
                eventAdd={handleEventAdd} //이벤트가 추가되면 발생하는 함수
                // eventChange = {} // 이벤트가 수정되면 발생하는 함수
                // eventRemove = {} // 이벤트가 삭제되면 발생하는 함수
              />
            </SCalendarModal>
          </SModalBackground>
        ) : null}
      </div>

      <SDateBook>
        {/* || 연산자 : data 값이 없으면 넘어가서 다음꺼! */}
        <p>{data || localeDate}</p>
      </SDateBook>
    </div>
  );
};

export default Calendar;
