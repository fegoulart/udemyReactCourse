function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your age: {props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"/>>
    </div>
);

ReactDOM.render(app,
    document.querySelector('#app')); //vai renderizar no HTML <div id="app"></div>


//Single Page Applications - only one ReactDOM.render
//Multi Page Application - one ReactDOM.render per widget

