function attachEventsListeners() {
  const daysInput = document.getElementById("days");
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  function convertTime(value, multiplier) {
    return value * multiplier;
  }

  function convertDays() {
    const days = parseFloat(daysInput.value);
    const hours = convertTime(days, 24);
    const minutes = convertTime(days, 24 * 60);
    const seconds = convertTime(days, 24 * 60 * 60);

    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
  }

  function convertHours() {
    const hours = parseFloat(hoursInput.value);
    const days = convertTime(hours, 1 / 24);
    const minutes = convertTime(hours, 60);
    const seconds = convertTime(hours, 60 * 60);

    daysInput.value = days;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
  }

  function convertMinutes() {
    const minutes = parseFloat(minutesInput.value);
    const days = convertTime(minutes, 1 / (24 * 60));
    const hours = convertTime(minutes, 1 / 60);
    const seconds = convertTime(minutes, 60);

    daysInput.value = days;
    hoursInput.value = hours;
    secondsInput.value = seconds;
  }

  function convertSeconds() {
    const seconds = parseFloat(secondsInput.value);
    const days = convertTime(seconds, 1 / (24 * 60 * 60));
    const hours = convertTime(seconds, 1 / 60 / 60);
    const minutes = convertTime(seconds, 1 / 60);

    daysInput.value = days;
    hoursInput.value = hours;
    minutesInput.value = minutes;
  }

  document.getElementById("daysBtn").addEventListener("click", convertDays);
  document.getElementById("hoursBtn").addEventListener("click", convertHours);
  document
    .getElementById("minutesBtn")
    .addEventListener("click", convertMinutes);
  document
    .getElementById("secondsBtn")
    .addEventListener("click", convertSeconds);
}
