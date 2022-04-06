import React, { useState } from "react";
import ElementMaker from "./ElementMaker";

// Creat an App component
function App() {
  // Set App's state
  const [fullName, setFullName] = useState("Joe Abraham");
  const [showInputEle, setShowInputEle] = useState(false);

  return (
    <div>
      <h1>Double Click the Full Name's Value to Edit</h1>
      <div>
        <strong>Full Name: </strong>
        {/* Invoke the ElementMaker component with some attributes */}
        <ElementMaker
          value={fullName} // Initialize the ElementMaker's value attribute with App's fullName state
          handleChange={(e) => setFullName(e.target.value)} // Initialize the ElementMaker's handleChange attribute 
                                                            // with a function that updates the state's fullName 
                                                            // property with the ElementMaker's <input> element's value
          handleDoubleClick={() => setShowInputEle(true)} // Initialize handleDoubleClick with a function that updates
                                                          // state's showInputEle property with the Boolean value true
          handleBlur={() => setShowInputEle(false)} // Initialize handleBlur with a function that updates state's 
                                                    // showInputEle property with the Boolean value false
          showInputEle={showInputEle} // Initialized showInputEle with the state's showInputEle property
        />
      </div>
    </div>
  );
}

export default App;