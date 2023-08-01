export const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
interface DayInfo {
  date: string;
  month: string;
  day: string;
  year: number;
  dayOfWeek: number;
}

export function getDaysArray(month: number, year: number): DayInfo[] {
  const days: DayInfo[] = [];
  const lastDayOfMonth = new Date(year, month, 0).getDate();

  for (let day = 1; day <= lastDayOfMonth; day++) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    const formattedDate = `${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}-${year}`;

    days.push({
      date: formattedDate,
      month: String(month).padStart(2, "0"),
      day: String(day).padStart(2, "0"),
      year,
      dayOfWeek,
    });
  }

  return days;
}
