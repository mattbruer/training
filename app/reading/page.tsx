import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import React from "react";

const page = () => {
  return (
    <Auth>
      <Navbar />
      <p>this will contain all the reading. Links/articles/etc</p>
      <p>There should be a "have red" checkbox</p>
      <p>there should be a way to comment discuss each</p>
      <p>There should be categories/tags and a search feature</p>
      <p>Should be able to create new category?? I don't like misc/random</p>
      <p>should have newsfeed like feel with most recent on top?</p>
      <p>Maybe make it look like a Huffpo/news site. </p>
    </Auth>
  );
};

export default page;
