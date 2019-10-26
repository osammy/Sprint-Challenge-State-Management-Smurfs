1. What problem does the context API help solve?
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!

- Actions describe the transformation that the state will suffer
  reducers are responsible for updating the state.
- The store is the single source of truth because all componens derives their state from     the store

- Application state describes te state of the entire application, while component state      describes the state of a component, component states should eb used when the states are    only consumed by the=at component alone

- redux-thunk is a middleware that allows us to perform async operations with redux
  action creators are the functions that dispatch actions to the reducers

- redux is my favorite because it allows you to easily separate state logic from components
