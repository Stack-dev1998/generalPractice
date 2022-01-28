import React, { useRef } from "react";
import RefChild1 from "./refChild1";
import RefChild2 from "./refChild2";
function RefPractice() {
  const child1Ref = useRef(null);
  console.log("parent rendred")

  return (
    <div>
      Parent
      <RefChild1 child1Ref={child1Ref} />
      <RefChild2 child1Ref={child1Ref} />
    </div>
  );
}

export default RefPractice;
