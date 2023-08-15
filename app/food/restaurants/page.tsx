import React from "react";

const page = () => {
  return (
    <div className="text-white text-center p-5">
      <h1>Restaraunts</h1>
      <form className="flex flex-col h-40 justify-around">
        <input className="text-black border" type="text" placeholder="url" />
        <textarea name="comments" id=""></textarea>
        <button className="border p-2 rounded-2xl m-2">submit</button>
      </form>
    </div>
  );
};

export default page;
