Feature: Specify number of Events

Scenario: When the user has not specified a number, 32 is the default.
Given the user is able to display a list of events. 
When the user has not interacted with the “display number”-form.
Then the list should display thirtytwo items.

Scenario: User can change the number of events they want to see.
Given the user is able to display a list of events.
When the User changes the number in the NumberOfEvents input/form.
Then the list of event should display that number of items.