# Angular Dog Shop

This exercise has two parts:

1. Browsing the dogs Dog 
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

## Part I: The Dog List

1. Create a new component, `DogList`
2. OPTIONAL: Create a class, `Dog` (will work without this, use as a value add if needed for the lesson)

`DogList` should display a gallery of dogs along with their names. The data source for the dogs is stored in `dogdata.json`. 

`tsconfig.json` is has been configured with 3 properties to handle JSON files: `resolveJsonModule, esModuleInterop, and allowSyntheticDefaultImports`. 

With that, JSON files can be imported as follows: `import jsonName from `path/to/json;`

**dogs.service.ts**
- Import dogdata.json
- Add a private property `dogs` to `DogService` 

**dog-list.component.ts**
- Import `DogService`
- Inject `DogService` into the constructor as `dogService`
- Add a method `getAll()` which returns all the dogs.
- Add property `dogs` with value `this.getAll()`

**dog-list.component.html**
- Create a div with `ngFor` directive to loop through dogs.
- Display the dog name and image.

## Part II: Likes

Visitors to the site can look at the gallery of dogs and click a button if they like any of them.

Implement the like button using the following guidelines.

* Each dog has a like button
* The like button should also have a counter to display the the number of likes
* Create a new service `LikeService` which will keep track of the counter data
* STRETCH GOAL (optional): Try to use `localStorage` to track and persist the likes for each dog!

### Components

- DogList
- DogDetail

### Services

- Dogs
- Likes

### Models

- Dog
- Like
