"use client";
import { useEffect, useState } from "react";
import { loadItems } from "@/store/newsfeedSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import axios from "axios";
import NewsfeedItem from "./NewsfeedItem";
type NF = {
  id: string;
  name: string;
  thumb: string;
  caption: string;
  url: string;
};

const Newsfeed = () => {
  const dispatch = useDispatch();

  const { allItems } = useSelector((state: RootState) => state.newsfeed);
  useEffect(() => {
    const fetchNF = async () => {
      console.log("fetching newfeed");
      const {
        data: { allNFItems },
      } = await axios("http://localhost:8080/api/newsfeed");
      dispatch(loadItems(allNFItems));
    };
    if (!allItems.length) {
      fetchNF();
    }
  }, [dispatch, allItems.length]);

  return (
    <div className=" pb-48">
      <p className="text-center text-2xl">Newsfeed</p>
      <div className="flex flex-col-reverse w-1/2 ">
        {allItems.map((item: any) => (
          <NewsfeedItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;
