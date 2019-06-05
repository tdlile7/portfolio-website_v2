import { TimelineMax } from "gsap/TweenMax";

const homeEffects = refList => {
  // Ref List
  const { card1, card2, tab1, tab2 } = refList;

  // GSAP Timelines
  const cardTransition = new TimelineMax({ paused: true });

  //   Variables
  let frontCard;
  let backCard;

  if (card1.classList.contains("front")) {
    frontCard = card1;
    backCard = card2;
  } else {
    frontCard = card2;
    backCard = card1;
  }

  // Toggles which card is in the front
  card1.classList.toggle("front");
  card2.classList.toggle("front");

  // Toggle which tab button is active depending on whichever corresponding card is in front
  tab1.classList.toggle("active");
  tab2.classList.toggle("active");

  cardTransition
    .to(frontCard, 0.5, { left: "25%", opacity: 0 })
    .to(frontCard, 0, { zIndex: 1 })
    .to(backCard, 0.25, {
      top: "5%",
      left: "5%",
      zIndex: 2
    })
    .to(
      frontCard,
      0.5,
      {
        opacity: 1,
        top: "7.5%",
        left: "7.5%",
        boxShadow: "none"
      },
      "switch"
    )
    .to(
      backCard,
      0.5,
      {
        boxShadow: "5px 10px rgba(136, 136, 136, 0.30)"
      },
      "switch"
    );

  const homeEffectsInit = () => {
    cardTransition.play();
  };

  return {
    homeEffectsInit
  };
};

export default homeEffects;
