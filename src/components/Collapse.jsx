import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;


const Collapse = (props) => {
  const [openTab, setOpenTab] = useState(false);
  const [animation, setAnimation] = useState(false)
  const animationInProgress = animation ? "collapse_animation_down" : "collapse_animation_up";


  const openTabHandler = () => {
    if (!openTab) {
      setAnimation(true)
      setOpenTab(!openTab)
    }

    else {
        setAnimation(false)
        setTimeout(setOpenTab, 450, !openTab)
    }

  };

 
  return (
    <>
      <div onClick={openTabHandler} className="collapse_header">
        <h2 className="collapse_header_title">{props.title}</h2>
        {!openTab ? 
          <i className="collapse_header_icon">{angleDown}</i>
         : (
          <i className="collapse_header_icon">{angleUp}</i>
        )}
      </div>
      {openTab ? (
      <div className={`collapse_content ${animationInProgress}`}>
        {props.content}
      </div>
    ):null}
   
    </>
  );
};

export default Collapse;
