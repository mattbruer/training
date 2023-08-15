"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AddIngredients = ({ recipeId }: any) => {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [nut, setNut] = useState({});

  const handleChange = (e: any) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8080/api/ingredients", {
      name: ingredient,
      recipeId,
    });
    setIngredient("");
    setIngredients([...ingredients, data]);
  };

  useEffect(() => {
    const fetchIngredients = async () => {
      const {
        data: { allIngredients },
      } = await axios("http://localhost:8080/api/ingredients");
      console.log("allIngredients=>", allIngredients);
      setIngredients(allIngredients);
    };
    fetchIngredients();
  }, []);
  return (
    <div>
      <h2>Add Ingredients</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={ingredient}
          onChange={handleChange}
          type="text"
          className="border text-black"
        />
        <button type="submit" className="border p-2 rounded-2xl">
          Add Ingredient
        </button>
      </form>
      <div className="border w-fit ">
        {ingredient !== "" &&
          ingredients
            .filter((i: { name: string }) => i.name.includes(ingredient))
            .map((i: { id: string; name: string }) => (
              <p onClick={() => setIngredient(i.name)} key={i.id}>
                {i.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export default AddIngredients;
