import React from 'react';

function refChild2(props) {
   
    let t =()=>{
        console.log("clieddddd",props.child1Ref.current("hshshshsh"))
    }
    console.log("child2 rendred")
    return (
        <div>
            Child 2
            <button onClick={()=>props.child1Ref.current("paramter")}>getChild 1 function</button>
        </div>
    );
}

export default refChild2;