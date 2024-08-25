import React from "react";
import CardMain from "./cardMain";
import CardInvitation from "./cardInvitation";
import CardHistory from "./cardHistory";
import FooterMain from "./FooterMain";


const ContentMain = () => (
  <div>
    <CardMain />
    <CardInvitation />
    <CardHistory />
    <FooterMain/>
  </div>
);

export default ContentMain;
