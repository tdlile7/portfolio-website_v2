import React, { useState, useRef, useEffect } from "react";
import homeEffects from "../effects/home.effects";
import Card1 from "./card1";
import Card2 from "./card2";

const Home = () => {
  const [tab, setTab] = useState(1);
  const card1 = useRef();
  const card2 = useRef();
  const tab1 = useRef();
  const tab2 = useRef();

  // Activates card sliding effect when a different tab is selected
  useEffect(() => {
    const refList = {
      card1: card1.current,
      card2: card2.current,
      tab1: tab1.current,
      tab2: tab2.current
    };
    const { homeEffectsInit } = homeEffects(refList);
    homeEffectsInit();
  }, [tab]);

  return (
    <div id="home">
      <div className="profileImage" />
      <div className="content">
        <div className="subNav">
          <button ref={tab1} className="aboutMe" onClick={() => setTab(1)}>
            About Me
          </button>
          <button
            ref={tab2}
            className="skills active"
            onClick={() => setTab(2)}
          >
            Skills
          </button>
        </div>
        <div className="tabs">
          <>
            <div ref={card1} className="card back">
              <Card1 />
            </div>
            <div ref={card2} className="card front">
              <Card2 />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
