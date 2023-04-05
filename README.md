# LAB 06 - React Hooks

## useState

### Task 1 - simple counter

1. Import the `Counter` component from file `components/Counter.js` to `App.js` and render it inside the main `<div>`
2. Add the `useState` hook in the `Counter` component to keep track of the internal count.
3. On click of the button the value of the internal counter should increment by 1.

### Task 2 - using current state

1. Add another button to the `Counter` component.
2. On click of this new button, the current count will double (multiply current value by 2)

FYI: You can comment out the `Counter` component in App.js once you finish it so it doesn't distract you in the following tasks.

### Task 3 - arrays in state

1. Import the `Lottery` component from file `components/Lottery.js` to `App.js` and render it inside the main `<div>`
2. Add the `useState` hook in the `Lottery` component to keep track of the lottery numbers.
3. On click of the button the next number should be added to the array.

### Task 4 - conditional rendering

State can be used for conditional rendering where we want to display different things based on the state.
We might have multiple state variables in one component.

1. Import the `WinningNumbers` component from file `components/WinningNumbers.js` into `components/Lottery.js`
2. Change the `Lottery` component in the following way:
   - if the count of numbers in the state is lower than 10, it displays the UI to roll next number (`<div>` with `className="TodaysNumbers"`)
   - if the count of numbers in the state is 10, it will display the `WinningNumbers` component, passing the current numbers as props

### BONUS 1 - fixing mistakes

1. Inspect the `WinningNumbers` and `Numbers` components in `components/WinningNumbers.js`
2. The `Numbers` component should change colors based on the selected option in `WinningNumbers`
3. Find out why it is not working and fix it.

## useEffect

### Task 1 - window sizer

1. Import the `WindowSizer` component from file `components/WindowSizer.js` to `App.js` and render it inside the main `<div>`
2. Add the `useEffect` hook in the `WindowSizer` component to update the window dimension every time it resizes.
   Use the `window.addEventListener('resize', () => { /* your set state functions here */ });` function to update the dimensions (See https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
3. Make sure you clean up the listener in the cleanup function with `window.removeEventListener`

### Task 2 - stopwatch

1. Import the `Stopwatch` component from file `components/Stopwatch.js` to `App.js` and render it inside the main `<div>`
2. Modify the `useEffect` hook in the `Stopwatch` component to not increment the time unless the `running` state variable is `true`.
3. Make sure you specify all the dependencies correctly for the `useEffect`

### Task 3 - stopwatch reset

1. Make sure the `Reset` button in the `Stopwatch` component works. It should stop the timer and reset time to 0.

### Task 4 - star wars

1. Import the `StarWars` component from file `components/StarWars.js` to `App.js` and render it inside the main `<div>`
2. Add the `useEffect` hook in the `StarWars` component to call the Star Wars API and fetch data about a selected movie
3. Make sure you specify all the dependencies correctly for the `useEffect`
4. Make sure you avoid race conditions and ignore stale results (See https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects)

### BONUS 2 - dynamic movie list

1. Update the `select` in `StarWars` component to use dynamic data fetched from the Star Wars API. You can use the `fetchMovieList` helper to get the data.
