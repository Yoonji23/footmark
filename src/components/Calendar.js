import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ localeDate }) => {
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
      <div>
        {/* || 연산자 : data 값이 없으면 넘어가서 다음꺼! */}
        <p>선택한 날짜 : {data || localeDate}</p>
      </div>
    </div>
  );
};

export default Calendar;
