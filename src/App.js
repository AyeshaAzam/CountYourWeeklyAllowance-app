import "./App.css";
import WeeklyAllowanceSlider from "./Slider";

function App() {
  return (
    <div className="app">
      <div className="app__text">
        <h1>VeckopengHjälpen-App</h1>
      </div>

      <div className="app__slider">
        <WeeklyAllowanceSlider />
      </div>
    </div>
  );
}

export default App;
