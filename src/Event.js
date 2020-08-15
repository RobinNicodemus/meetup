import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';
class Event extends Component {
    state = {
        showDetails: false,
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    getData = () => {
        const event = this.props.event;
        const chartReadyData = []

        if (!event.rsvp_limit) {
            return
        }
        const maxNum = event.rsvp_limit;
        const peopleComing = event.yes_rsvp_count;
        const freeSlots = maxNum - peopleComing;

        chartReadyData.push({ name: "open", value: freeSlots }, { name: "people coming", value: peopleComing })

        return chartReadyData

    }

    render() {
        const event = this.props.event;
        const group = event.group;
        const venue = event.venue;
        const data = this.getData();
        const chartColors = ["#37c0ba", "#8884d8"]; //[0]free [1]occupied

        return (
            <div className="event" >
                <div className="eventHead">
                    <p className="eventTitle">{event.name}</p>
                    <div className="eventDate">{event.local_date} - {event.local_time}</div>
                </div>
                <div className="eventBody">
                    {event.rsvp_limit &&
                        <ResponsiveContainer className="attendanceChart" height={140} width="50%">
                            <PieChart>
                                <Pie isAnimationActive={false} data={data} dataKey="value" nameKey="name" innerRadius={10} outerRadius={25} label>
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={chartColors[index]} />
                                        ))
                                    }
                                </Pie>
                                <Tooltip />
                                <Legend align='center' verticalAlign='top' layout="horizontal" height={26} />
                            </PieChart>

                        </ResponsiveContainer>
                    }
                    {group &&
                        <div className="eventGroup">
                            {group.name}
                        </div>
                    }
                    {
                        !this.state.showDetails &&
                        <div className="descriptionStub" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                    }
                    {
                        this.state.showDetails &&
                        <div className="eventDetails">
                            <div className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                            <div className="eventFooter">
                                {venue && <div className="eventPlace">
                                    <div className="eventVenue">{venue.name}</div>
                                    <div className="eventAddress">{venue.address_1}</div>
                                </div>}
                            </div>
                        </div>
                    }
                </div>
                <button onClick={this.toggleDetails} className="detailsButton">Details</button>
            </div >
        );
    }
}

export default Event;