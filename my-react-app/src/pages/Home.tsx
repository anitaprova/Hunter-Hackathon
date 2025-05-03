import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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

  console.log(entry?.files);

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

          <Modal open={showPopup} onClose={() => setShowPopup(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                borderRadius: 5,
                boxShadow: 24,
                p: 4,
                fontFamily: "Itim",
                minWidth: "500px",
                minHeight: "250px",
                fontSize: "20px",
              }}
            >
              {entry ? (
                <div>
                  {entry.mood && (
                    <p>
                      <strong>Your Mood:</strong> {entry.mood} / 5
                    </p>
                  )}
                  {entry.text && (
                    <p>
                      <strong>Your thoughts:</strong> {entry?.text}
                    </p>
                  )}

                  {entry?.image && (
                    <>
                      <p>
                        <strong>Your drawing:</strong>
                      </p>
                      <img
                        src={entry.image}
                        alt="Drawing"
                        className="border border-pink border-3 border-solid rounded-xl mt-5"
                      />
                    </>
                  )}

                  {entry.video && <video src={entry.video} controls />}
                  {entry.files &&
                    entry.files.map((file, idx) => (
                      // <p key={idx}>{file.name}</p>
                      <img key={idx} src={file} />
                    ))}
                </div>
              ) : (
                <p className="p-5 text-2xl">No entry for this date</p>
              )}
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Home;
