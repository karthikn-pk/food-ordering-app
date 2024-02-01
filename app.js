const parent=React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, React.createElement("h1",{id:"heading"}, "hi da  react la irundhu")));
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)