function dayOfWeek(number) {
  if (number < 1 || number > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(days[number - 1]);
  }
}
dayOfWeek(0);
