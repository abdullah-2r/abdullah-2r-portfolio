# Dev Tech Stack

A modern React app for exploring and building a personalized developer technology stack.

## Description
This project helps users browse available technologies, compare categories, and select the tools they want to include in their own development stack. It provides a clean interface for choosing frontend, backend, database, and tooling options.

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify

## Features
1. Browse a curated list of development technologies by category.
2. Add technologies to a selected stack and view them in a live stack panel.
3. Remove individual items or clear the full stack with quick actions and notifications.

## Challenges Faced

- Keeping the available technology list and the selected-stack panel synchronized as users add and remove items.
- Handling empty and populated stack states clearly, including useful feedback after selection actions.
- Loading the technology data asynchronously before rendering the available choices.

## Approach

The selected technologies are maintained in React state in the parent component and passed to child components through props. The technology list is loaded from JSON with `useEffect`. Child components use the provided state-update function to add or remove items, while conditional rendering presents the empty state or current selection.

## Potential Improvements

- Persist selected stacks between visits with browser storage or user accounts.
- Add search and category filters for larger technology catalogs.
- Allow users to export or share a completed stack.

## Q&A

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like code inside JavaScript so that React components are easier to read and build. Instead of manually creating elements with `createElement()`, we can write UI in a more natural way, like `<div>Hello</div>`. In this project, JSX is used to build the navbar, banner, technology cards, and footer.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component and are read-only. State is internal data that belongs to a component and can change over time. In this project, `selectedStack` is stored in the parent component as state, and then passed down to child components as props so they can render and update the selected technologies.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a functional component manage and update its own dynamic data. It returns a state value and a setter function. In this project, I used it to track the selected technologies:

```tsx
const [selectedStack, setSelectedStack] = useState<TechType[]>([]);
```

This state is used to store the technologies chosen by the user and update the selected stack panel.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs after a component renders and is used for side effects like fetching data, setting timers, or updating the DOM. In this project, the JSON data is loaded asynchronously from `/Data.json`, and `useEffect` is useful to fetch it once when the component mounts and then store it in state before rendering the technology list.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` prop to track which list item changed, was added, or was removed. A unique key helps React update the DOM efficiently and avoids rendering bugs. In this project, each technology card is rendered with a key like:

```tsx
<TechStackCard key={tech.id} tech={tech} />
```

where `tech.id` is unique for each item.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means rendering different UI depending on a condition. In this project, the selected stack area shows either a message or the chosen items depending on whether the array is empty or not:

```tsx
{selectedStack.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <ul>{selectedStack.map(...)}</ul>
)}
```

This displays an empty-state message when no technology has been selected yet.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent to a child using props, for example:

```tsx
<AvailableTechStack selectedStack={selectedStack} setSelectedStack={setSelectedStack} technologies={technologies} />
```

The child receives those values as props and can use them. To send data back to the parent, the child calls the parent's setter function, such as:

```tsx
setSelectedStack((prev) => [...prev, tech]);
```

This updates the parent state, and React re-renders the UI with the new selected stack.
Live Demo : https://dev-tech-stack.netlify.app/
Github Repository : https://github.com/abdullah-2r/dev-tech-stack
