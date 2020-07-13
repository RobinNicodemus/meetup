import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        let details;

        return (
            <div className="event">
                <h2 className="eventTitle">{this.props.event.name}</h2>
                {this.state.showDetails &&
                    <div className="eventDetails"></div>
                }
                <button onClick={this.toggleDetails} className="detailsButton"></button>
            </div>
        );
    }
}

export default Event;