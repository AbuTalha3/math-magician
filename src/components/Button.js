// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Button({ onClick, label }) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.protoTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
