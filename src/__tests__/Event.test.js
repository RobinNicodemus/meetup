import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


describe('<Event /> component', () => {
    let EventWrapper;
    const event =
    {
        "created": 1589203577000,
        "duration": 4500000,
        "id": "hchfsrybckbkb",
        "name": "ONLINE YOGA | Yoga am Morgen im Sprengelkiez",
        "date_in_series_pattern": false,
        "status": "upcoming",
        "time": 1594105200000,
        "local_date": "2020-07-07",
        "local_time": "09:00",
        "updated": 1589203577000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 1,
        "venue": {
            "id": 26779354,
            "name": "K1",
            "lat": 52.541202545166016,
            "lon": 13.357195854187012,
            "repinned": true,
            "address_1": "Kiautschoustr. 1",
            "city": "Berlin",
            "country": "de",
            "localized_country_name": "Deutschland"
        },
        "is_online_event": false,
        "group": {
            "created": 1489658869000,
            "name": "Berlin Yoga Club",
            "id": 22903338,
            "join_mode": "approval",
            "lat": 52.52000045776367,
            "lon": 13.380000114440918,
            "urlname": "Berlin-Yoga-Club",
            "who": "Berlin Yoga Club Members",
            "localized_location": "Berlin, Deutschland",
            "state": "",
            "country": "de",
            "region": "de_DE",
            "timezone": "Europe/Berlin"
        },
        "link": "https://www.meetup.com/de-DE/Berlin-Yoga-Club/events/hchfsrybckbkb/",
        "description": "<p>testesttest</p> ",
        "visibility": "public",
        "member_pay_fee": false
    };

    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    test('event instance exists', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('show details button exists', () => {
        expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
    });

    test('default value of showDetails is false', () => {
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('button click toggles showDetails', () => {
        EventWrapper.find('.detailsButton').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('if showDetails is true, eventDetails exists', () => {
        EventWrapper.setState({ showDetails: true });
        expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    });

    test('event title is rendered', () => {
        expect(EventWrapper.find('.eventTitle')).toHaveLength(1);
    });

    test('event title is correct', () => {
        expect(EventWrapper.find('.eventTitle').text()).toBe("ONLINE YOGA | Yoga am Morgen im Sprengelkiez");
    });
})