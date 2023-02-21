import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    // Replace this with the date you want to count down to
    const countDownDate = new Date("2023-11-27T23:59:59Z").getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((difference / 1000 / 60) % 60);
      seconds = Math.floor((difference / 1000) % 60);
    }

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div className=' px-2'>
      {timeLeft.days > 0 && (
        <p>
          {timeLeft.days} {timeLeft.days > 1 ? "dias" : "dia"} {timeLeft.hours}{" "}
          {timeLeft.hours > 1 ? "horas" : "hora"} {timeLeft.minutes}{" "}
          {timeLeft.minutes > 1 ? "minutos" : "minuto"} {timeLeft.seconds}{" "}
          {timeLeft.seconds > 1 ? "segundos" : "segundos"}
        </p>
      )}
      {timeLeft.days === 0 && timeLeft.hours > 0 && (
        <p>
          {timeLeft.hours} {timeLeft.hours > 1 ? "horas" : "hora"}{" "}
          {timeLeft.minutes} {timeLeft.minutes > 1 ? "minutos" : "minuto"}{" "}
          {timeLeft.seconds} {timeLeft.seconds > 1 ? "segundos" : "segundos"}
        </p>
      )}
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes > 0 && (
        <p>
          {timeLeft.minutes} {timeLeft.minutes > 1 ? "minutos" : "minuto"}{" "}
          {timeLeft.seconds} {timeLeft.seconds > 1 ? "segundos" : "segundo"}
        </p>
      )}
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 && <p>{timeLeft.seconds} segundos</p>}
    </div>
  );
};

export default Timer;