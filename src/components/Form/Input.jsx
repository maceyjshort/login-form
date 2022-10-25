import PropTypes from "prop-types";
import React from "react";

export default function Input({ label, type }) {
  // This looks where I input my code. I am like only 45% sure though. I am gonna do it anyway.
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);
  }
  return (
    <form onSubmit={handleSumbit}>
      <div className="mt-4 flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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

/** Okay, this might be because I had a long day, but this doesn't make too much sense honestly. I might be placing my controlled HTML form code in the wrong file, but I feel like it should go in the input. That is  my first part of the confusion.
 * Second part, the difference between controlled and uncontrolled... I get the main difference is the fact controlled you tell the code what to display and is easier to do things with than uncontrolled while having more code to type... So simple things you can get away with uncontrolled but more complex things you need controlled. IS that the main part of it?
 *Controlled you need to create a state, does that mean in the uncontrolled you do not?
 *So I only skimmed this before starting. If I read READ it I would have known it would probably be better in form... or broken up into input and button. Oh well... My bad.
 */
