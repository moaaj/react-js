import React from 'react';




function Todo(){
    return (
    <div>
        <p>Todo Title</p>
        <p>Todo Desc</p>
    </div>
    );
}

  function Todo2(){
    return React.createElement(
        "div",
        {},
        React.createElement("p", {}, "Todo title"),
        React.createElement("p", {}, "Todo desc")
    );
}

export default function App(){
return (
    <div>
        <Todo2 />
        
    </div>
);
}