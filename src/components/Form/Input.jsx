import PropTypes from "prop-types";
import React from "react";

export default function Input({ label, type }) {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("name:", nameRef.current.value);
    console.log("email:", emailRef.current.value);
    console.log("message:", messageRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 flex flex-col">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" ref={messageRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["email", "password"]),
};

Input.defaultProps = {
  type: "text",
};

// Multi line code isn't working because why the flip not? DOn't want to waste anymore time trying to figure it out
// anyway I will mainly talk about the uncontrolled on this document.
// As I stated in the other branch, react docs claim that it is best to controlled versus uncontrolled
// when using uncontrolled it takes less code, but there is also less controll on them (hence the name) with the less code, there is different syntax used, different code needed to communicate with the DOM
