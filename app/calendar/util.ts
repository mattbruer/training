export const months: string[] = [
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
    let [m, d, y] = date.toLocaleDateString().split("/");
    m = m.padStart(2, "0");
    d = d.padStart(2, "0");

    const dayOfWeek = date.getDay();

    days.push({
      date: `${y}-${m}-${d}`,
      month: String(month).padStart(2, "0"),
      day: String(day).padStart(2, "0"),
      year,
      dayOfWeek,
    });
  }

  return days;
}
