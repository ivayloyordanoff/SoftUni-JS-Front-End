function solve(arr) {
  let meetings = {};

  for (const el of arr) {
    let [weekday, name] = el.split(" ");

    if (meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetings[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
