import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const handleDateClick = (e) => {
    console.log("e", e);
  };

  return (
    <>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        // eventContent={renderEventContent}
        // plugins={[dayGridPlugin]}
        events={[
          { title: "제목: 0000", date: "2023-04-01" },
          { title: "성수 데이트", date: "2023-04-04" },
        ]}
      />
    </>
  );
};

// export function renderEventContent(eventInfo) {
//   console.log("eventInfo", eventInfo);
//   console.log("eventInfo.timeText", eventInfo.timeText);
//   console.log("eventInfo.event.title", eventInfo.event.title);
//   return (
//     <>
//       {/* <b>{eventInfo.timeText}</b> */}
//       <p>{eventInfo.event.title}</p>
//     </>
//   );
// }

export default Calendar;
