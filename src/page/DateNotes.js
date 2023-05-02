import Calendar from "../components/Calendar";

const DateNotes = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const localeDate = `${year}-${month}-${day}`;
  return (
    <div>
      <Calendar localeDate={localeDate} />
    </div>
  );
};

export default DateNotes;
