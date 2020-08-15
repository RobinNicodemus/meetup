import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    page: 32,
    lat: null,
    lon: null,
    warningText: ''
  }

  componentDidMount() {
    this._isMounted = true;
    getEvents().then(response => {
      if (this._isMounted) {
        this.setState({ events: response });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ warningText: "No network connection. Events are loaded from the previous session." });
    } else {
      this.setState({ warningText: "" })
    }
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events }));
    }
  }

  updatePage = (page) => {
    this.setState({ page: page });
    this.updateEvents(this.state.lat, this.state.lon, page);
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();

    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');

      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count });
    }

    return next7Days;
  }

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  render() {
    return (
      <div className="App">
        {this.state.warningText && <WarningAlert text={this.state.warningText} />}
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updatePage={this.updatePage} />
        <ResponsiveContainer height={400}>
          <ScatterChart
            width={800}
            height={400}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
