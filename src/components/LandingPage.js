import React from "react";
import SlideShow from "./SlideShow";
import SectionNav from "./SectionNav";
import ExploreAll from "./ExploreAll";
import KbbAward from "./KbbAward";
import WHTParent from "./WHTParent";
import Footer from "./Footer";

const LandingPage = () => {
  return(
    <div className="landingContain">
      <SlideShow />
      <SectionNav />
      <ExploreAll />
      <KbbAward />
      <WHTParent />
      <Footer />
    </div>
  )
};
export default LandingPage;

















