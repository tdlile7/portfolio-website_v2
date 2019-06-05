import { Power2, Power3, TimelineMax } from "gsap/TweenMax";

const landingEffects = refList => {
  // Ref List
  const {
    startBtnRef,
    landing,
    overlay1,
    overlay2,
    portfolio,
    greeting,
    name,
    cssSvg,
    htmlSvg,
    jsSvg,
    reactSvg
  } = refList;

  // GSAP Timelines
  const landingTransition = new TimelineMax({ paused: true });
  const landingAnimation = new TimelineMax({ paused: true });

  // Variables
  const sections = [landing, overlay1, overlay2];
  const iconSvg = [cssSvg, htmlSvg, jsSvg, reactSvg];
  const startBtn = startBtnRef;

  //Landing page animation upon initial loading
  landingAnimation
    .to(greeting, 3, { strokeDashoffset: 0, ease: Power2.easeOut }, "beginning")
    .to(name, 3, { strokeDashoffset: 0, ease: Power2.easeOut }, "-=2")
    .to(startBtn, 2, { opacity: 1, ease: Power2.easeOut }, "beginning+=2.25")
    .to([greeting, name], 2.5, { fill: "white" }, "beginning+=2.25")
    .staggerFromTo(
      iconSvg,
      1,
      {
        opacity: 0,
        ease: Power3.easeOut
      },
      { opacity: 1 },
      0.35,
      "beginning+=2.5"
    );

  //Landing page to porfolio page transition
  landingTransition
    .staggerTo(
      sections,
      1.5,
      {
        top: "-100vh",
        ease: Power3.easeOut
      },
      0.35
    )
    .to(portfolio, 0, { display: "flex" }, "-=1")
    .fromTo(
      portfolio,
      2,
      { opacity: 0, ease: Power2.easeOut },
      { opacity: 1 },
      "-=0.5"
    );

  const start = () => {
    landingTransition.play();
    landingAnimation.pause();
  };

  const landingEffectsInit = () => {
    //Add event listener to trigger landing page to portfolio page transition
    startBtn.addEventListener("click", start);
    landingAnimation.play();
  };

  //Remove event listener once unmounted
  const landingEffectsUnmount = () => {
    startBtn.removeEventListener("click", start);
  };

  return {
    landingEffectsInit,
    landingEffectsUnmount
  };
};

export default landingEffects;
