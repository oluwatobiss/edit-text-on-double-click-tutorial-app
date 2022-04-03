import React, { useState } from "react";
import ElementMaker from "./ElementMaker";

function App() {
  const [fullName, setFullName] = useState("Joe Abraham");
  const [showInputEle, setShowInputEle] = useState(false);

  return (
    <div>
      <h1>Double Click the Full Name’s Value to Edit</h1>
      <div>
        <strong>Full Name: </strong>
        <ElementMaker
          value={fullName}
          handleChange={(e) => setFullName(e.target.value)}
          handleDoubleClick={() => setShowInputEle(true)}
          handleBlur={() => setShowInputEle(false)}
          showInputEle={showInputEle}
        />
      </div>
    </div>
  );
}

export default App;