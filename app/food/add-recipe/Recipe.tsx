"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newRecipe } from "@/store/foodSlice";
import { useRouter } from "next/navigation";
import { addToNewsfeed } from "@/store/newsfeedSlice";
import "./style.css";
import { RootState } from "@/store";

type FormVals = {
  name: string;
  url: string;
  description: string;
  notes: string;
};
const Recipe = ({ socket }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const [formVals, setFormVals] = useState<FormVals>({
    name: "",
    url: "",
    description: "",
    notes: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormVals({ ...formVals, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:8080/api/food`, {
        ...formVals,
        user,
      });

      dispatch(newRecipe(data));

      socket.emit("addNewsfeedItem", data.nfItem);

      setFormVals({ name: "", url: "", description: "", notes: "" });
      router.push("/food");
    } catch (error) {
      console.log(error);
    }
  };

  const { name, url, description, notes } = formVals;

  return (
    <div>
      <form className="flex flex-col m-5" onSubmit={handleSubmit}>
        <input
          className="border"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name of Dish..."
        />
        <input
          className="border"
          placeholder="URL..."
          name="url"
          value={url}
          onChange={handleChange}
          type="text"
        />
        <input
          className="border"
          placeholder="Description..."
          name="description"
          value={description}
          onChange={handleChange}
          type="text"
        />
        <input
          className="border"
          placeholder="Notes..."
          name="notes"
          value={notes}
          onChange={handleChange}
          type="text"
        />
        <button className="border bg-emerald-200" type="submit">
          Yum
        </button>
      </form>
    </div>
  );
};

export default Recipe;
