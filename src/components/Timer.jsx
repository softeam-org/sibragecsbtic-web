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
    <div>
      
      {timeLeft.days > 0 && (
          
          <div className="flex gap-10">

          <div className="flex flex-col items-center ">
          <p className="text-6xl">
          {timeLeft.days} 
          </p>
          
          <p className="text-base">
          {timeLeft.days > 1 ? "DIAS" : "DIA"} 
          </p>
          </div>
          
          <div className="flex flex-col items-center ">
          <p className="text-6xl">
          {timeLeft.hours}
          </p>
          
          
          <p className="text-base"> 
          {timeLeft.hours > 1 ? "HORAS" : "HORA"}
          </p>
          </div>
          
          <div className="flex flex-col items-center ">
          <p className="text-6xl">{timeLeft.minutes}</p>
          
          <p className="text-base">{timeLeft.minutes > 1 ? "MINUTOS" : "MINUTO"} </p>
          </div>
          
          <div className="flex flex-col items-center ">
          <p className="text-6xl">{timeLeft.seconds}</p>
          
          
          <p className="text-base">{timeLeft.seconds > 1 ? "SEGUNDOS" : "SEGUNDO"}</p>
          </div>
          
          
          
          </div>
        
      )}
      
      {timeLeft.days === 0 && timeLeft.hours > 0 && (
        <p>
          {timeLeft.hours} {timeLeft.hours > 1 ? "HORAS" : "HORA"}{" "}
          {timeLeft.minutes} {timeLeft.minutes > 1 ? "MINUTOS" : "MINUTO"}{" "}
          {timeLeft.seconds} {timeLeft.seconds > 1 ? "SEGUNDOS" : "SEGUNDO"}
        </p>
      )}
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes > 0 && (
        <p>
          {timeLeft.minutes} {timeLeft.minutes > 1 ? "MINUTOS" : "MINUTO"}{" "}
          {timeLeft.seconds} {timeLeft.seconds > 1 ? "SEGUNDOS" : "SEGUNDO"}
        </p>
      )}
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 && <p>{timeLeft.seconds} SEGUNDOS</p>}
    </div>
  );
};

export default Timer;
