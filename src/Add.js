import React from "react";
import "./Add.css";

class Add extends React.Component{
    render() {
        return (
            <div className="search-container container">
                <input type="text" name="search" onKeyPress={this.props.onKeyPress} />
            </div>
        );
    }
}

export default Add;