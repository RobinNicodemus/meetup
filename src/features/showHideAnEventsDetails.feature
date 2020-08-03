Feature: Show and hide an events details

Scenario: An event hides the details (is collapsed) by default.
Given the user is able to display a list of events(by cache or connection). 
When the user has not done anything inside the list. 
Then all event's details should be hidden/collapsed.

Scenario: The user can expand an event to show its details.
Given the user is able to display a list of events.
When the user clicks on a “show details”-Button inside the event´s view.
Then the events deatils should be rendered/shown.

Scenario: User can collapse an event to hide its details.
Given the user has expanded an event.
When the User clicks the details Button.
Then the view should collapse and the details should be hidden.