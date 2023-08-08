"use client";
import React, { useState } from "react";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import AddIngredients from "./AddIngredients";

const Details = ({ recipe }: any) => {
  const handleSubmit = () => {
    setEditMode(false);
  };
  const handleChange = () => {};
  const [editMode, setEditMode] = useState(false);
  const [notes, setNotes] = useState(recipe.notes);

  return (
    <div>
      <h1 className="text-4xl text-center capitalize">{recipe.name}</h1>
      <div className="relative" style={{ height: "35vw" }}>
        <Image
          priority
          fill
          alt="j"
          src={recipe.thumb}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-screen p-5">
        <p>{recipe.description}</p>
        <button className="border border-black p-2 rounded-2xl">
          <Link target="_blank" href={recipe.url}>
            Go To Recipe
          </Link>
        </button>
        <AddIngredients recipeId={recipe.id} />
        {editMode ? (
          <form onSubmit={handleSubmit} className="m-5 flex flex-col">
            <p>Notes</p>
            <textarea className="w-1/2 border" autoFocus value={recipe.notes} />
            <button
              type="submit"
              onClick={() => setEditMode(true)}
              className="border w-48 p-2 rounded-2xl"
            >
              Submit
            </button>
          </form>
        ) : (
          <>
            <p>NOTES</p>
            <div>{recipe.notes}</div>
            <button
              onClick={() => setEditMode(true)}
              className="border w-48 p-2 rounded-2xl"
            >
              EDIT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
