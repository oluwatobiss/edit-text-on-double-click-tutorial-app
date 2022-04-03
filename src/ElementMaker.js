import React from "react";

function ElementMaker(props) {
  return (
    <span>
      {
        /** Use ternary operator to specify <span>’s content */
        props.showInputEle ? (
          <input 
            type="text" 
            value={props.value} 
            onChange={props.handleChange} 
            onBlur={props.handleBlur} 
            autoFocus 
          />
        ) : (
          <span 
            onDoubleClick={props.handleDoubleClick}
            style={{ 
              display: "inline-block", 
              height: "25px", 
              minWidth: "300px", 
            }}
          >
            {props.value}
          </span>
        )
      }
    </span>
  );
}

export default ElementMaker;