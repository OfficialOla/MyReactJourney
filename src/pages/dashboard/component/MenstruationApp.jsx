 import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../styles/MenstruationApp.css';
import { Router, Routes, Route } from "react-router-dom";

function MenstruationPeriodCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleInterval, setCycleInterval] = useState("");
  const [nextPeriodDate, setNextPeriodDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleLastPeriodDateChange = (event) => {
    setLastPeriodDate(event.target.value);
  };

  const handleCycleIntervalChange = (event) => {
    setCycleInterval(event.target.value);
  };
   

  const calculateNextPeriodDate = () => {
    const lastPeriodDateObj = new Date(lastPeriodDate);
    const cycleIntervalNum = parseInt(cycleInterval);
    const nextPeriodDateObj = new Date(
      lastPeriodDateObj.getTime() + cycleIntervalNum * 24 * 60 * 60 * 1000
    );
    setNextPeriodDate(nextPeriodDateObj);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getPeriodDates = () => {
    const periodDates = [];
    let currentDate = new Date(lastPeriodDate);
    let nextPeriodDateObj;
    while (currentDate <= nextPeriodDate) {
      periodDates.push(new Date(currentDate));
      nextPeriodDateObj = new Date(
        currentDate.getTime() + cycleInterval * 24 * 60 * 60 * 1000
      );
      currentDate = nextPeriodDateObj;
    }
    return periodDates;
  };

  const periodDates = getPeriodDates();

  return (
    <div className="mainContainer">
      <p className="logo"> MiLady Flow</p>
      <div className="topNav">
      <nav>
                <li><a href="https://google.com" class = "names1">Book appointment</a></li>
                <li><a href="https://semicolon.africa" class="names2">Contact us</a></li>
                <li><a href="https://github.com" class="names3">About us</a></li>
                <li><a href="https://jw.org" class="names4">Company</a></li>
                <li><a href="https://www.freecodecamp.org" class="namee5">Blog</a></li>
            </nav>
      </div>
      <h1>Menstruation Period Calculator</h1>
      <label className="lpdtext">
        Last period date: 
        <input
          type="date"
          value={lastPeriodDate}
          onChange={handleLastPeriodDateChange}
        />
      </label>
      <br />
      <label className="CycleIntervalText">
        Cycle interval (in days): 
        <input
          type="number"
          min="1"
          value={cycleInterval}
          onChange={handleCycleIntervalChange}
        />
      </label>
      <br />
      <button onClick={calculateNextPeriodDate}>Calculate</button>
      <br />
      {nextPeriodDate && (
        <div>
          <p className="nextPeriodDate">Next period date:</p>
          <p className="npd">{nextPeriodDate.toLocaleDateString()}</p>
        </div>
      )}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </div>
      <br />
      <div>
        <p className="periodDates">Period dates:</p>
        {periodDates.map((date) => (
          <p className="pd" key={date.getTime()}>{date.toLocaleDateString()}</p>
        ))}
      </div>
    </div>
  );
}

export default MenstruationPeriodCalculator;
