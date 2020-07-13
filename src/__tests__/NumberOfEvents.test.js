import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('events component is generated', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    });

    test('default number of events per page is 32', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });

    test('input textbox is rendered', () => {
        expect(NumberOfEventsWrapper.find('.changeNumOfEvents')).toHaveLength(1);
    });

    test('number of events per page changes on input change', () => {
        const eventObject = { target: { value: '16' } };
        NumberOfEventsWrapper.find('.changeNumOfEvents').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe(16);
    })

});