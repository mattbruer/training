import EventForm from "./EventForm";

import Auth from "@/components/Auth";
const page = () => {
  return (
    <Auth>
      <h1
        style={{ textShadow: "1px 1px 1px black" }}
        className="text-center text-white text-4xl"
      >
        Add Event
      </h1>
      <EventForm />
    </Auth>
  );
};

export default page;
