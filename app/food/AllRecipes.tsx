"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./FoodCard";
import axios from "axios";
import { RootState } from "@/store";
import { loadRecipes } from "@/store/foodSlice";

const AllRecipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipes = async () => {
      const {
        data: { allRecipes },
      } = await axios("http://localhost:8080/api/food");

      dispatch(loadRecipes(allRecipes));
    };
    fetchRecipes();
  }, [dispatch]);

  const { allRecipes } = useSelector((state: RootState) => state.food);

  return (
    <div>
      {allRecipes.length &&
        allRecipes.map((r: any) => (
          <FoodCard
            slug={r.slug}
            key={r.name}
            name={r.name}
            description={r.description}
            url={r.url}
            thumb={r.thumb}
          />
        ))}
    </div>
  );
};

export default AllRecipes;
