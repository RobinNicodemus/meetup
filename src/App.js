import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    page: 32,
    lat: null,
    lon: null
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

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updatePage={this.updatePage} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
