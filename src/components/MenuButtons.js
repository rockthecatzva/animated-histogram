import React from "react";
import PropTypes from "prop-types";

export default function MenuButtons(props) {
  const { onButtonClick, selectedButton } = props;

  return (
    <div className="button-container">
      {props.children.map((c, i) => {
        const className = i === selectedButton ? " --selected" : "";
        const props = {
          className,
          key: i,
          onClick: () => onButtonClick(i)
        };


        return React.cloneElement(c, props);
      })}
    </div>
  );
}

MenuButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  selectedButton: PropTypes.number
};
