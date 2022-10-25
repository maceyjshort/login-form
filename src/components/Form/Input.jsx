import PropTypes from "prop-types";

export default function Input({ label, type }) {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={label} />
    </div>
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
