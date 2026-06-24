import React, { useState } from "react";

const Hero = () => {
  const [notes, setNotes] = useState({ title: "", details: "" });
  const [list, setList] = useState([]);
  const addNotes = (e) => {
    e.preventDefault();
    const copyNotes = [...list];

    copyNotes.push(notes);
    console.log(copyNotes)
    setList(copyNotes);
    setNotes({ title: "", details: "" });
  };
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
      <form className="h-screen flex flex-col w-2/3 lg:w-1/2 items-center justify-center gap-5">
        <h1 className="text-3xl mb-6 font-bold text-blue-700">Create a Note</h1>
        <input
          className="border-amber-200 text-blue-300 w-full p-5 ml-5"
          placeholder="Enter Title"
          value={notes.title}
          onChange={(e) => {
            setNotes((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
        <textarea
          className="border-amber-200 text-blue-300 w-full p-5 ml-5 "
          placeholder="Enter Description"
          value={notes.details}
          onChange={(e) => {
            setNotes((prev) => ({ ...prev, details: e.target.value }));
          }}
        />
        <button
          onClick={(e) => {
            addNotes(e);
          }}
          className="bg-blue-700 active:scale-95 active:bg-blue-950 text-white p-3 rounded-lg w-full ml-5"
        >
          Add Note
        </button>
      </form>
      <div className={list.length < 1 ? "" :"h-[calc(100vh-12px)] mt-3 flex flex-col lg:grid overflow-scroll items-center md:grid-cols-3 lg:grid-cols-4 w-full lg:w-1/2 lg:items-start gap-2 lg:gap-5"}>
        {list.map((elem, idx) => {
          return (
            <div
              id={idx}
              className="h-40 w-40 rounded-2xl p-5 m-2 relative overflow-scroll items-center justify-center bg-blue-300"
            >
              <h3 className="text-lg leading-tight font-bold text-blue-700">
                {elem.title}
              </h3>
              <p className="text-md text-blue-900">
                {elem.details}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
