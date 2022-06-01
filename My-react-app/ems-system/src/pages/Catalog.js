// Import the React and ReactDOM libraries
import React from "react";

//const author = 'Bao Tram';

// Create a react component
const Catalog = props => {
    return (
        <div>
            Hello, {props.author || "Default props"}
        </div>
    );
};

// Take the react component and show it on the screen
//ReactDOM.render(<Hello/>, document.querySelector('root'));

export default Catalog;