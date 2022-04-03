import React from "react";

function ElementMaker(props) {
  return (
    // Render a <span> element
    <span>
      {
        // Use JavaScript's ternary operator to specify <span>'s content
        props.showInputEle ? (
        //  If props.showInputEle's value is truthy, render 
        //  an <input> element as <span>'s inner content
          <input 
            type="text" 
            value={props.value} 
            onChange={props.handleChange} 
            onBlur={props.handleBlur} 
            autoFocus 
          />
        ) : (
        //  However, if props.showInputEle's value is falsy, use a 
        //  second <span> element as the first <span>'s inner content
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