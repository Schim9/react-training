console.log("Mon app React sans bundler")

function Title() {
    return React.createElement(
        "h1", 
        {className: "titre"}, 
        "Mon app React sans bundler"
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(Title())


