# Angular Shop

This exercise has two parts:

1. Browsing dogs
2. Adding a "likes" feature

## Setup

```
git clone
cd ngshop
npm install
ng serve --open
```

# Objectives

We'll create a very simple application that displays a list of dogs. In this exercise you will:

* Create components
* Create services
* Implement Dependency Injection (DI)
* Explain services and DI

## Exercise

Finish this application. The main page should:
- Display all the dogs
- Use well styled, responsive layout (no ugly apps)
- All visitors to like any of the dogs listed

Implement the like button using the following guidelines.

* Each dog has a like button
* The like button should also have a counter to display the the number of likes
* Create a new service `LikeService` which will keep track of the counter data
* STRETCH GOAL (optional): Try to use `localStorage` to track and persist the likes for each dog!

> IMPORTANT: `tsconfig.json` is has been configured with 3 properties to handle JSON files: `resolveJsonModule, esModuleInterop, and allowSyntheticDefaultImports`. 

With this configured, JSON files can be imported as follows: `import jsonName from path/to/json;`.

**`DogsService`**
- Imports dogdata.json
- has a private property `dogData` to `DogService` 
- has a `get()` method to retrieve dogs by their id
- has a `all()` method to retrieve all dogs

**`DogListComponent`**
- Import `DogService`
- Inject `DogService` into the constructor as `dogService`
- Add a method `getAll()` which returns all the dogs.
- Add property `dogs` with value `this.getAll()`

**`dog-list.component.html`**
- Create a div with `ngFor` directive to loop through dogs.
- Display the dog name and image.

**`dog.ts`**
- has 3 properties: id, name and thumbnail, all are strings

