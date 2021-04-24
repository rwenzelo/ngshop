# The Doggo Shop

The Doggo Shop is an app where lovers of dogs can come and browse a collection fo lovable best friends and make lists of their favorite doggos. Your task is to build this dream come true!

## About Angular Services

Services manage the data in your app. Any service can be made available to any component at any time. Use services to manage the Dog collection. The service should:

- Make the dogs available to other components
- Implement a read-only interface for the service

Start by displaying the collection fo dogs before you work on the likes and favorites.

## About Data Storage

The dog information for this app is stored in a JSON file in the project. You'll need to parse it to create a browsable collection of dogs.

The `localStorage` object is built into browsers to allow applications to store small stores of data. For example, a common use case for this type of storage might include shopping carts that remember what you placed in them even if you leave the page.

There's also `sessionStorage` which only lives as long as the browser tab remains open. Closing the tab clears the storage.

Use these tools to persist data in your application.

## Instructions

Finish this application. The main features:

- Displays all the dogs
- Visitors can like any of the dogs listed
- Visitors have a favorites list
- Notifications

### Requirements

* displays all dogs with images and titles/names
* Each dog has a like button and favorite button
* Clicking favorite should add it to the users favorites list
* like buttons have a counter to display the number of likes
* Use a well styled, responsive layout (no ugly apps)

> IMPORTANT: `tsconfig.json` is has been configured with 3 properties to handle JSON files: `resolveJsonModule, esModuleInterop, and allowSyntheticDefaultImports`. 

With this configured, JSON files can be imported as follows: `import jsonName from path/to/json;`.

**`DogsService`**
- manages data sources for dogs
- has a private property `dogData` to `DogService` 
- has a `get()` method to retrieve dogs by their id
- has a `all()` method to retrieve all dogs

**`DogListComponent`**
- uses `DogService`
- has a method `getAll()` which returns all the dogs.
- has property `dogs` with value `this.getAll()`

**`Dog` (class)**
- has 3 properties: id, name and thumbnail, all are strings

#### Stretch Goals

- no duplicate favorites or likes
- dynamic scrolling; more images loaded as you scroll down the page
- use a library such as Masonry.js make a neater grid layout
