// Import the React and ReactDOM libraries
import React from "react";
import { ReactDOM } from "react";

//const author = 'Bao Tram';

// Create a react component
const Hello = props => {
    return <div>
        Hello, {props.author}
    </div>
};

// Take the react component and show it on the screen
//ReactDOM.render(<Hello/>, document.querySelector('root'));

export default Hello