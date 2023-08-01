import Link from "next/link";
import "./style.css";

const Day = ({ day }: any) => {
  return (
    <div>
      {day === "0000-00-00" ? (
        <div className="border h-16 bg-white day"></div>
      ) : (
        <Link href={`/calendar/daydash/${day}`}>
          <div className="border h-16 bg-white day">
            <p className="text-xs">
              {day.split("-")[1][0].startsWith("0")
                ? day.split("-")[1][1]
                : day.split("-")[1]}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Day;
