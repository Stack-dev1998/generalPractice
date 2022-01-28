import React, { useRef } from "react";

function RefChild1(props) {
  const child1Method = (parameter) => {
    console.log("I am a Child 1 method!!!", parameter);
  };

  React.useEffect(() => {
    props.child1Ref.current = child1Method;
  }, []);
  console.log("child1 rendred");
  return <div>Child 1</div>;
}

function RefChild2(props) {
  let t = () => {
    console.log("clieddddd", props.child1Ref.current("hshshshsh"));
  };
  console.log("child2 rendred");
  return (
    <div>
      Child 2
      <button onClick={() => props.child1Ref.current("paramter")}>
        getChild 1 function
      </button>
    </div>
  );
}

function RefPractice() {
  const child1Ref = useRef(null);
  console.log("parent rendred");

  return (
    <div>
      Parent
      <RefChild1 child1Ref={child1Ref} />
      <RefChild2 child1Ref={child1Ref} />
    </div>
  );
}

export default RefPractice;
