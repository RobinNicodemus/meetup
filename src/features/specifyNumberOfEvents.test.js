import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import { mockEvents } from '../mock-events';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user has not specified a number, 32 is the default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is able to display a list of events.', () => {
            AppWrapper = mount(<App />);

        });

        when('the user has not interacted with the “display number”-form.', () => {

        });

        then('the list should display thirtytwo items.', () => {
            expect(AppWrapper.find('App').state('page')).toBe(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is able to display a list of events.', () => {
            AppWrapper = mount(<App />);
        });

        when('the User changes the number in the NumberOfEvents input/form.', () => {
            const eventObject = { target: { value: '12' } };
            AppWrapper.find('.changeNumOfEvents').simulate('change', eventObject);
        });

        then('the list of event should display that number of items.', () => {
            //timeout is necessary, as component is delayed to prevent rapid unnecessary querys
            setTimeout(() => {
                expect(AppWrapper.find('App').state('page')).toBe(12);
            }, 500);
        });
    });
});