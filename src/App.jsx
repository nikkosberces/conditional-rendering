import Temperature from "./components/Temperature";
import Login from "./components/Login";
import TrafficLight from "./components/TrafficLight";

function App() {
  return (
    <div>
      <Temperature temperature={90} />
      <Login isLoggedIn={false} />
      <TrafficLight color="red" />
    </div>
  );
}

export default App;
