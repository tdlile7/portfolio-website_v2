import { TimelineMax, Power2 } from "gsap/all";

const openFormEffects = refList => {
  // Ref List
  const {
    contactMe,
    contactFormContainer,
    openFormBtn,
    gmailIcon,
    facebookIcon,
    linkedinIcon,
    codepenIcon,
    githubIcon,
    line1,
    line2,
    line3,
    line4
  } = refList;

  // GSAP Timelines
  const openFormTimeline = new TimelineMax({ paused: true });
  const socialMedia = [
    facebookIcon,
    gmailIcon,
    githubIcon,
    linkedinIcon,
    codepenIcon
  ];
  const lines = [line1, line2, line3, line4];

  const scrollEffect = () => {
    let offSetTop = contactMe.offsetTop;
    window.scroll({
      top: offSetTop,
      behavior: "smooth"
    });
  };

  openFormTimeline
    .to(openFormBtn, 0.5, {
      opacity: 0,
      ease: Power2.easeOut
    })
    .to(openFormBtn, 0, {
      display: "none"
    })
    .to(contactMe, 0.5, {
      height: "100vh",
      ease: Power2.easeOut,
      onComplete: scrollEffect
    })
    .to(
      contactFormContainer,
      1.25,
      {
        opacity: 1,
        left: 0
      },
      "+=0.5"
    )
    .staggerTo(
      socialMedia,
      0.5,
      {
        opacity: 1
      },
      0.35
    )
    .staggerTo(
      lines,
      0.75,
      {
        strokeDashoffset: 0
      },
      0.25
    );

  const start = () => {
    openFormTimeline.play();
  };

  const openFormEffectsInit = () => {
    //Add event listener to trigger reveal of contact form section
    openFormBtn.addEventListener("click", start);
  };

  //Remove event listener once unmounted
  const openFormEffectsUnmount = () => {
    openFormBtn.removeEventListener("click", start);
  };

  return {
    openFormEffectsInit,
    openFormEffectsUnmount
  };
};

export default openFormEffects;
