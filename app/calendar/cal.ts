const calendar = {
  days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  yearsOut: 2,
  startYear: 2023,
};

function isLeapYear(year: number) {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return true;
}

const calStart = {
  date: "2023-01-01",
};
