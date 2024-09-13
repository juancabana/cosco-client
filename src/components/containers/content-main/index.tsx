import React from "react";
import CardMain from "./cardMain";
import CardInvitation from "./cardInvitation";
import CardHistory from "./cardHistory";
import FooterMain from "./FooterMain";
import Ellipse from "@/assets/Ellipse_21.png";

const ContentMain = () => (
  <div className="relative">
    <img
      src={Ellipse}
      alt=""
      className="absolute hidden xl:block -top-32 right-0 z-10"
    />
    <CardMain />
    <CardInvitation />
    <CardHistory />
    <FooterMain />
  </div>
);

export default ContentMain;
