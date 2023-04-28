import "./App.css";
import "./Calendar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import LandingPage from "./components/LandingPage";
import Calendar from "./components/Calendar";
import Main from "./page/Main";
import DateNotes from "./page/DateNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Category />
      <Routes>
        {/* <LandingPage />
    <Calendar /> */}
        <Route path="/" element={<Main />} />
        <Route path="/dateNotes" element={<DateNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
