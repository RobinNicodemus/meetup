import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event hides the details (is collapsed) by default.', ({ given, when, then }) => {
        let EventListWrapper;
        given('the user is able to display a list of events(by cache or connection).', () => {
            EventListWrapper = mount(<EventList events={mockEvents.events} />);
            expect(EventListWrapper.exists('.event')).toEqual(true);
        });

        when('the user has not done anything inside the list.', () => {

        });

        then('all event\'s details should be hidden/collapsed.', () => {
            expect(EventListWrapper.find('Event').first().state('showDetails')).toBe(false)
        });
    });

    test('The user can expand an event to show its details.', ({ given, when, then }) => {
        let EventWrapper;
        given('the user is able to display a list of events.', () => {
            EventWrapper = shallow(<Event event={mockEvents.events[0]} />);
            expect(EventWrapper.exists('.eventTitle')).toEqual(true);
        });

        when('the user clicks on a “show details”-Button inside the event´s view.', () => {
            EventWrapper.find('.detailsButton').simulate('click');
        });

        then('the events deatils should be rendered/shown.', () => {
            expect(EventWrapper.state('showDetails')).toBe(true);
            expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let EventWrapper;
        given('the user has expanded an event.', () => {
            EventWrapper = shallow(<Event event={mockEvents.events[0]} />);
            EventWrapper.setState({ showDetails: true });
        });

        when('the User clicks the details Button.', () => {
            EventWrapper.find('.detailsButton').simulate('click');
        });

        then('the view should collapse and the details should be hidden.', () => {
            expect(EventWrapper.state('showDetails')).toBe(false);
            expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
        });
    });
});