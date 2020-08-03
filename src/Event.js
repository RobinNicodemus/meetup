import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        const event = this.props.event;
        const group = event.group;
        const venue = event.venue;

        return (
            <div className="event">
                <div className="eventHead">
                    <p className="eventTitle">{event.name}</p>
                    <div className="eventDate">{event.local_date}</div>
                </div>
                {
                    !this.state.showDetails &&
                    <div className="descriptionStub" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                }
                {
                    this.state.showDetails &&
                    <div className="eventDetails">
                        {group && <div className="eventGroup">{group.name}</div>}
                        <div className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                        <div className="eventFooter">
                            <div className="eventTime">{event.local_time}</div>
                            {venue && <div className="eventPlace">
                                <div className="eventVenue">{venue.name}</div>
                                <div className="eventAddress">{venue.address_1}</div>
                            </div>}
                        </div>
                    </div>
                }
                <button onClick={this.toggleDetails} className="detailsButton">Details</button>
            </div >
        );
    }
}

export default Event;