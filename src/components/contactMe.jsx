import React, { useRef, useEffect } from "react";
import sendFormEffects from "../effects/contactMe.sendForm.effects";
import openFormEffects from "../effects/contactMe.openForm.effects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faPhone,
  faComment
} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  // Shared Refs for all animation timelines below
  const contactMe = useRef();
  const contactFormContainer = useRef();

  // Refs exclusively used by sendFormEffects animation timeline
  const mailIcon = useRef();
  const contactForm = useRef();
  const sendFormBtn = useRef();
  const postSubmitMessage = useRef();

  // Refs exclusively used by openFormEffects animation timeline
  const openFormBtn = useRef();
  const gmailIcon = useRef();
  const facebookIcon = useRef();
  const linkedinIcon = useRef();
  const githubIcon = useRef();
  const codepenIcon = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const line4 = useRef();

  // Opens a new tab to the social media page when the associated SVG is clicked, which is located next to the contact form
  const relocate = socialMediaIcon => {
    const links = {
      facebook: "https://www.facebook.com/tommy.lile.3",
      linkedin: "https://www.linkedin.com/in/thomas-lile-a249128a/",
      gmail: "tlile1429@gmail.com",
      github: "https://github.com/tdlile7?tab=repositories",
      codepen: "https://codepen.io/tlilecode/"
    };
    const chosenSocialMedia = links[socialMediaIcon];

    socialMediaIcon === "gmail"
      ? window.open(`mailto:${chosenSocialMedia}`)
      : window.open(chosenSocialMedia);
  };

  // Animation to expand and reveal contact form section
  useEffect(() => {
    const openFormRefList = {
      contactMe: contactMe.current,
      contactFormContainer: contactFormContainer.current,
      openFormBtn: openFormBtn.current,
      gmailIcon: gmailIcon.current,
      facebookIcon: facebookIcon.current,
      linkedinIcon: linkedinIcon.current,
      codepenIcon: codepenIcon.current,
      githubIcon: githubIcon.current,
      line1: line1.current,
      line2: line2.current,
      line3: line3.current,
      line4: line4.current
    };

    const { openFormEffectsInit, openFormEffectsUnmount } = openFormEffects(
      openFormRefList
    );
    openFormEffectsInit();
    return () => {
      openFormEffectsUnmount();
    };
  });

  // Animation when the contact form has been send
  useEffect(() => {
    const sendFormRefList = {
      mailIcon: mailIcon.current,
      contactForm: contactForm.current,
      contactFormContainer: contactFormContainer.current,
      sendFormBtn: sendFormBtn.current,
      postSubmitMessage: postSubmitMessage.current
    };

    const { sendFormEffectsInit, sendFormEffectsUnmount } = sendFormEffects(
      sendFormRefList
    );
    sendFormEffectsInit();
    return () => {
      sendFormEffectsUnmount();
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    // Wait the duration of the entire submit form animation before actually submitting form
    setTimeout(() => {
      contactForm.current.submit();
    }, 8000);
  };

  return (
    <div ref={contactMe} id="contactMe">
      <button className="openFormBtn" ref={openFormBtn}>
        Contact Me
      </button>
      <div ref={contactFormContainer} className="contactFormContainer">
        <div ref={mailIcon} className="mailIconContainer">
          <FontAwesomeIcon className="mailIcon" icon={faEnvelope} />
        </div>
        <form
          ref={contactForm}
          className="contactForm"
          name="contact"
          method="POST"
          action="https://formspree.io/tlile1429@gmail.com"
        >
          <div class="inputGroup">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <input type="text" name="username" placeholder="name" />
          </div>
          <div class="inputGroup">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <input type="email" name="email" placeholder="email" />
          </div>
          <div class="inputGroup">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <input type="tel" name="phone" placeholder="telephone" />
          </div>
          <div class="textGroup">
            <FontAwesomeIcon className="icon" icon={faComment} />
            <textarea name="message" placeholder="message" />
          </div>
          <button
            ref={sendFormBtn}
            className="sendFormBtn"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
        <p ref={postSubmitMessage} class="postSubmitMessage">
          Message ready for final check!
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg-inline--fa socialMedia"
        data-prefix="fab"
        viewBox="0 0 400 800"
      >
        <path
          ref={line1}
          className="line"
          d="M197.388 104.645L299.426 216.44"
        />
        <path ref={line2} className="line" d="M225.42 552.92l-80.941 71.11" />
        <path ref={line3} className="line" d="M181.153 425.763l114.983 59.66" />
        <path ref={line4} className="line" d="M227.643 267.614L104.29 352.86" />
        <path
          className="icon gmail"
          onClick={() => relocate("gmail")}
          ref={gmailIcon}
          d="M369.74 254.461c1.143-.955 2.842-.061 2.842 1.448v63.004c0 8.164-6.299 14.788-14.062 14.788H236.645c-7.764 0-14.063-6.624-14.063-14.788V255.94c0-1.54 1.67-2.403 2.842-1.448 6.563 5.361 15.264 12.17 45.147 34.999 6.181 4.744 16.61 14.726 27.011 14.665 10.46.092 21.094-10.105 27.041-14.665 29.883-22.83 38.555-29.669 45.117-35.03zm-72.158 39.805c6.797.123 16.582-8.996 21.504-12.755 38.877-29.668 41.836-32.256 50.8-39.65 1.7-1.387 2.696-3.543 2.696-5.823v-5.854c0-8.164-6.299-14.788-14.062-14.788H236.645c-7.764 0-14.063 6.624-14.063 14.788v5.854c0 2.28.996 4.406 2.696 5.823 8.964 7.363 11.923 9.982 50.8 39.65 4.922 3.76 14.707 12.878 21.504 12.755z"
        />
        <path
          className="icon github"
          onClick={() => relocate("github")}
          ref={githubIcon}
          d="M166.117 349.326H48.26c-8.873 0-16.072 7.2-16.072 16.072v117.857c0 8.873 7.199 16.071 16.072 16.071h117.857c8.873 0 16.071-7.198 16.071-16.071V365.398c0-8.873-7.198-16.072-16.071-16.072zm-41.083 128.471c-2.812.503-3.85-1.238-3.85-2.678 0-1.808.067-11.05.067-18.516 0-5.223-1.741-8.538-3.784-10.279 12.389-1.373 25.447-3.08 25.447-24.475 0-6.094-2.176-9.14-5.726-13.058.57-1.44 2.478-7.366-.569-15.067-4.654-1.44-15.301 5.993-15.301 5.993-4.42-1.239-9.208-1.875-13.929-1.875-4.72 0-9.509.636-13.928 1.875 0 0-10.648-7.433-15.302-5.993-3.046 7.667-1.171 13.594-.569 15.067-3.549 3.917-5.223 6.964-5.223 13.058 0 21.294 12.489 23.102 24.877 24.475-1.607 1.44-3.047 3.918-3.549 7.467-3.18 1.44-11.317 3.917-16.172-4.654-3.047-5.29-8.538-5.726-8.538-5.726-5.424-.067-.368 3.415-.368 3.415 3.616 1.675 6.16 8.103 6.16 8.103 3.248 9.944 18.784 6.596 18.784 6.596 0 4.654.067 12.221.067 13.594 0 1.44-1.004 3.18-3.85 2.678-22.099-7.4-37.567-28.426-37.567-53.002 0-30.736 23.504-54.073 54.24-54.073 30.737 0 55.648 23.337 55.648 54.073.034 24.576-14.966 45.636-37.065 53.002zM92.188 457.34c-.636.134-1.238-.134-1.305-.57-.067-.502.368-.937 1.004-1.07.636-.068 1.239.2 1.306.635.1.436-.335.87-1.005 1.005zm-3.18-.301c0 .435-.503.803-1.172.803-.737.067-1.24-.301-1.24-.803 0-.436.503-.804 1.173-.804.636-.067 1.239.301 1.239.804zm-4.587-.369c-.134.435-.804.636-1.373.435-.636-.133-1.072-.636-.938-1.07.134-.436.804-.637 1.373-.503.67.2 1.105.703.938 1.138zm-4.119-1.808c-.301.368-.937.302-1.44-.2-.502-.436-.636-1.072-.3-1.373.3-.369.937-.302 1.439.2.435.436.603 1.105.301 1.373zm-3.047-3.047c-.301.201-.87 0-1.238-.502-.369-.502-.369-1.071 0-1.306.368-.301.937-.067 1.238.436.369.502.369 1.104 0 1.372zm-2.176-3.247c-.301.3-.804.133-1.172-.201-.368-.436-.435-.938-.134-1.172.302-.302.804-.134 1.172.2.368.436.435.938.134 1.173zm-2.243-2.478c-.134.301-.57.368-.938.134-.435-.201-.636-.57-.502-.87.134-.202.502-.302.937-.135.436.235.637.603.503.87z"
        />
        <path
          className="icon linkedin"
          onClick={() => relocate("linkedin")}
          ref={linkedinIcon}
          d="M360.164 481.28H231.559c-5.893 0-10.681 4.855-10.681 10.815v128.37c0 5.96 4.788 10.815 10.68 10.815h128.606c5.893 0 10.714-4.855 10.714-10.815v-128.37c0-5.96-4.821-10.815-10.714-10.815zm-93.951 128.572H243.98v-71.585h22.265v71.585zm-11.116-81.362c-7.132 0-12.89-5.793-12.89-12.89 0-7.099 5.758-12.891 12.89-12.891 7.098 0 12.89 5.792 12.89 12.89 0 7.132-5.759 12.89-12.89 12.89zm94.453 81.362h-22.232V575.03c0-8.303-.168-18.984-11.552-18.984-11.584 0-13.359 9.04-13.359 18.381v35.425h-22.232v-71.585h21.328v9.776h.301c2.98-5.625 10.246-11.55 21.06-11.55 22.5 0 26.686 14.832 26.686 34.117z"
        />
        <path
          className="icon codepen"
          onClick={() => relocate("codepen")}
          ref={codepenIcon}
          d="M186.956 649.42l-68.555-45.703c-2.34-1.44-4.837-1.453-7.198 0L42.648 649.42c-1.757 1.172-2.845 3.265-2.845 5.357v45.703c0 2.093 1.088 4.185 2.846 5.357l68.554 45.71c2.34 1.44 4.837 1.453 7.199 0l68.554-45.71c1.758-1.171 2.847-3.264 2.847-5.357v-45.703c0-2.092-1.089-4.185-2.847-5.357zm-65.708-28.293l50.474 33.65-22.517 15.067-27.957-18.666zm-12.89 0v30.05l-27.959 18.667-22.516-15.067zm-55.665 45.704l16.155 10.798-16.155 10.798zm55.664 67.3l-50.474-33.65 22.516-15.068 27.958 18.667zm6.445-41.268L92.034 677.63l22.768-15.235 22.768 15.235zm6.446 41.267v-30.05l27.957-18.667 22.517 15.067zm55.664-45.703l-16.156-10.798 16.156-10.798z"
        />
        <path
          className="icon facebook"
          onClick={() => relocate("facebook")}
          ref={facebookIcon}
          d="M183.827 27.898H65.97a16.071 16.071 0 0 0-16.072 16.071v117.858a16.071 16.071 0 0 0 16.072 16.071h45.954v-50.997H90.83v-24.003h21.094V84.603c0-20.809 12.388-32.303 31.363-32.303 9.087 0 18.589 1.62 18.589 1.62v20.424h-10.47c-10.316 0-13.533 6.402-13.533 12.968v15.586h23.029l-3.683 24.003h-19.346v50.997h45.954a16.071 16.071 0 0 0 16.071-16.071V43.969a16.071 16.071 0 0 0-16.071-16.071z"
        />
      </svg>
    </div>
  );
};

export default ContactMe;
