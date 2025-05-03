import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../calendar.css";


const Home = () => {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  const handleClickDay = (value) => {
    setDate(value);
    setShowPopup(true);
  };
  
  return (
    <>
      <div className="bg-white flex flex-col ml-50 mr-50 mt-10 p-5 rounded-3xl shadow-dark">
        <h1 className="text-fushia text-5xl justify-self-center self-center mb-5">
          Calendar
        </h1>
        <Calendar onClickDay={handleClickDay} />
      </div>
    </>
  );
};

export default Home;
