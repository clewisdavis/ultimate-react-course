# Udemy, Ultimate React Course

September, 2024, doing some refresher on React

## Section 1: Welcome

Just an intro, not much here.

## Section 2: React Fundamentals

More intro stuff

## Section 3: First Look

Setting up the first React app, using the `create-react-app` command in the terminal. And some basics of the terminal.

## Section 4: Review of Essential JS

This might be useful for you to review. Been a while.

## Section 5: Working with Components, Props and JSX

### Components as building blocks

- React apps are entirely made out of components
- Building blocks of UI in React
- Piece of UI that has it's own data, logic, and appearance.
- Build multiple components and then put together
- Nest components
- Props, to pass data into a component
- Components can be reused, nested inside each other
- Component Trees, see relationships, parent child relationship

### Creating and reusing a component

### What is JSX

- Declarative syntax to describe what components look like and how they work.
- Each component must return one block of JSX
- And extension of JS, allow us to combine JS, CSS and HTML
- Convert JSX to JS, uses a conversion tool, Babel
- Each JSX element is converted to a `React.createElement` function call.
- All the JSX is converted to `createElement` function calls.

- JSX is Declarative
- Imperative
  - Manual DOM element selections and DOM traversing
  - Step by Step DOM mutations until we get the UI we want
- Declarative
  - Describe what the UI should look like based on data
  - Props and State
  - Use JSX to describe the UI
  - Without any direct DOM manipulation
  - Abstraction away from the DOM
  - UI as a reflection of the current data

### Separation of Concerns

- Seperate files, HTML, CSS and JS
- Rise is SPAs > JS in charge of HTML > Logic and UI are tightly coupled > Why keep them separated ? React Components and JSX
- Component, Data, Logic and Appearance
- HTML and JS are collocated
- One component per file
- One Component per file, each component is concerned with one piece of the UI
-

### Styling React Applications

### Props

- Props are use dto pass data from parent coponents to child components, down the tree
- Configure and customize components, like function parameters
- Anything can be passed as props, value, arrays, objects, functions and other components.

- Props are READ ONLY
- Component

  - Data
    - Props - owned by the parent component, they are immutable, just an object
    - State - for data that changes over time
  - Logic
  - Appearance

- Components have to be pure in terms of props and state
- One way data flow, data passed from parent, to child components. But never the opposite way. Top to bottom of the component tree
- Angular does two way data flow
- Why, lot easier to understand how the data is flowing, down and more performant
- Then, how do you pass data up to parent component?

### JSX Rules

- JSX works a lot like HTML
- But you can enter a JS mode using the `{}` brackets
- You can place any JS expression inside the {}
- But statements are not allowed, if/else, for, switch
- JSX produces a JS expression
  - We can palce other pieces of JSX inside
  - We can write JSX anywhere inside a component
- A piece of JSX can only have one root element.

- Some other differences between JSX and HTML
  - `className` instead of HTML `class`
  - htmlFor insstead of HTML's for
  - Every tag needs to be closed. Ex. `<img />` or `<br />`
  - All event handlers and other properties need to be camelCase. Ex. `onClick` or `onMouseOver`
  - Exception: `aria-` and `data-` are written with dashes like HTML
  - CSS inline styles are written like this `style={{<style>}}` to reference a variable and then an object.
  - CSS property names are also camelCase
  - Comments need to be in {} because they are JS

### Rendering Lists
