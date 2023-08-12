import React from "react";
import Recipe from "./Recipe";
import Auth from "@/components/Auth";
import SocketWrap from "@/components/SocketWrap";

const page = () => {
  return (
    <Auth>
      <SocketWrap>
        <Recipe />
      </SocketWrap>
    </Auth>
  );
};

export default page;
