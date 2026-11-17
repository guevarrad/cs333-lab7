// Load the page styles and reusable list component.
import "./App.css";
import List from "./List.jsx";

function App() {
  // Set the name and a random lucky number for the page.
  const name = "Dennis Guevarra";
  const luckyNumber = Math.floor(Math.random() * 100);

  // Choose a greeting based on the current time.
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  // Customize the greeting heading.
  const headingStyle = {
    color: "teal",
    fontSize: "42px",
  };

  // Render the greeting, lucky number, and list.
  return (
    <div>
      <h1 style={headingStyle}>{greeting}, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <List />
    </div>
  );
}

export default App;