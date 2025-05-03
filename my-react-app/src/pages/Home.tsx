import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import cloud from "../assets/cloud.svg";
import "../calendar.css";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [entry, setEntry] = useState();

  const handleClickDay = (value) => {
    const selectedDate = value.toISOString().split("T")[0];
    const entries = JSON.parse(localStorage.getItem("journalEntries") || "{}");
    setEntry(entries[selectedDate] || null);
    setDate(value);
    setShowPopup(true);
  };
  
  return (
    <>
      <div className="relative">
        <div className="floating relative bg-lightorange flex flex-col ml-50 mr-50 mt-10 p-5 rounded-3xl shadow-dark">
          <img
            src={cloud}
            alt="Cloud icon"
            className="w-75 -rotate-5 absolute -top-15 -left-25"
          />

          <img
            src={cloud}
            alt="Cloud icon"
            className="w-75 absolute -bottom-25 -right-40"
          />

          <h1 className="text-fushia text-5xl justify-self-center self-center mb-5">
            Calendar
          </h1>
          <Calendar onClickDay={handleClickDay} />
          {showPopup && entry && (
            <div className="entry-popup">
              <p>
                <strong>Mood:</strong> {entry.mood}
              </p>
              <p>
                <strong>Text:</strong> {entry.text}
              </p>
              {entry.image && <img src={entry.image} alt="Drawing" />}
              {entry.video && <video src={entry.video} controls />}
              {entry.files &&
                entry.files.map((file, idx) => <p key={idx}>{file.name}</p>)}
            </div>
          )}
          {showPopup && !entry && <p>No entry for this day.</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
