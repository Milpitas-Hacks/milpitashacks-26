document.addEventListener('DOMContentLoaded', function() {
  const Days = document.getElementById('days');
  const Hours = document.getElementById('hours');
  const Minutes = document.getElementById('minutes');
  const Seconds = document.getElementById('seconds');
  const targetDate = new Date("June 13 2026 00:00:00").getTime();

  function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance < 0) {
      Days.innerHTML = "00";
      Hours.innerHTML = "00";
      Minutes.innerHTML = "00";
      Seconds.innerHTML = "00";
      return;
    }

    Days.innerHTML = Math.floor(distance / 1000 / 60 / 60 / 24);
    Hours.innerHTML = Math.floor(distance / 1000 / 60 / 60) % 24;
    Minutes.innerHTML = Math.floor(distance / 1000 / 60) % 60;
    Seconds.innerHTML = Math.floor(distance / 1000) % 60;
  }

  timer();
  setInterval(timer, 1000);
});
