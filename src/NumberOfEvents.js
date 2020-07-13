import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        query: 32, //default 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        //because input "changeNumOfEvents" will be a type text and not a type number the following workaround has been applied
        //if value is a positive number (in this case a string with ONLY one or more digits) change state
        if (/^\d+$/.test(value)) {
            //change value from string to integer
            let valueAsInt = parseInt(value, 10)
            this.setState({ query: valueAsInt });
        }
    }

    render() {

        return (
            <div className='NumberOfEvents'>
                <input
                    type="text"
                    pattern="\d*" //only positve numbers 
                    className="changeNumOfEvents"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        )
    }
}

export default NumberOfEvents