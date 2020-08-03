import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        query: 32, //default 32
    }
    timer = null;


    onChangeDebounced = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.props.updatePage(this.state.query);
        }, 250)
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        //because input "changeNumOfEvents" will be a type text and not a type number the following workaround has been applied
        //if value is a positive number (in this case a string with ONLY one or more digits) change state
        //  if (/^\d+$/.test(value)) {
        //change value from string to integer
        //    let valueAsInt = parseInt(value, 10)
        //  this.setState({ query: valueAsInt });
        //  this.props.updatePage(this.state.query);
        //}
        this.setState({ query: value });
        if (Math.sign(value) < 1) {
            this.setState({
                errorText: 'The number must be at least 1.',
            })
        } else {
            this.setState({
                errorText: '',
            });
            this.onChangeDebounced();
        }
    }

    render() {

        return (
            <div className='NumberOfEvents'>
                <input
                    type="number"
                    //pattern="^\d*$" //only positve numbers and nothing
                    className="changeNumOfEvents"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ErrorAlert className="numberAlert" text={this.state.errorText} />
            </div>
        )
    }
}

export default NumberOfEvents