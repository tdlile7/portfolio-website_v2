import { TimelineMax, Power1, Power3 } from "gsap/TweenMax";

const sendFormEffects = refList => {
  // Ref List
  const {
    mailIcon,
    contactForm,
    contactFormContainer,
    sendFormBtn,
    postSubmitMessage
  } = refList;

  // GSAP Timelines
  const sendFormTimeline = new TimelineMax({ paused: true });

  sendFormTimeline
    .to(contactFormContainer, 0.5, { scale: 0.5 }, "checkpoint1")
    .to(contactForm, 0.15, { opacity: 0 }, "checkpoint1")
    .to(mailIcon, 1, { opacity: 1 }, "checkpoint1+=0.5")
    .to(contactFormContainer, 1, {
      rotation: 360,
      ease: Power1.easeInOut
    })
    .to(contactFormContainer, 1, {
      rotation: 320,
      scale: 0.45,
      ease: Power3.easeInOut
    })
    .to(mailIcon, 0.25, { borderRadius: "50%" }, "checkpoint2")
    .to(contactFormContainer, 0.25, { borderRadius: "50%" }, "checkpoint2")
    .to(
      contactFormContainer,
      0.5,
      { rotation: 720, scale: 0.15 },
      "checkpoint2"
    )
    .to(contactFormContainer, 1, { y: "150px", ease: Power3.easeOut })
    .to(contactFormContainer, 0.75, {
      y: "-100px",
      ease: Power3.easeInOut
    })
    .to(contactFormContainer, 1, { y: "0", ease: Power3.easeInOut })
    .to(
      contactFormContainer,
      0.5,
      { rotation: 1080, scale: 0.7, borderRadius: "5px" },
      "checkpoint3"
    )
    .to(mailIcon, 0.25, { opacity: 0 }, "checkpoint3")
    .to(postSubmitMessage, 0.5, { opacity: 1 }, "checkpoint3+=0.25");

  const start = () => {
    sendFormTimeline.play();
  };

  const sendFormEffectsInit = () => {
    //Add event listener to trigger contact page animation after contact form submission
    sendFormBtn.addEventListener("click", start);
  };

  //Remove event listener once unmounted
  const sendFormEffectsUnmount = () => {
    sendFormBtn.removeEventListener("click", start);
  };

  return {
    sendFormEffectsInit,
    sendFormEffectsUnmount
  };
};

export default sendFormEffects;
