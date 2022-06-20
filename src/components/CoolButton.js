import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CoolButton = ({ text , pathname}) => {
  let navigate = useNavigate();
  return (
    <div>
      <Button
        size="lg"
        className="coolButton"
        onClick={() => {
          navigate({pathname});
        }}
      >
        {text}
      </Button>
    </div>
  );
};

CoolButton.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

export default CoolButton;
