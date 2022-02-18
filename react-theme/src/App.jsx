
import "./App.css";
import Content from "./components/Content/Content";
import ThemeContextProvider from "./components/Context/ThemeContext";
import ToggleButton from './components/ToggleButton/ToggleButton';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ToggleButton />
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
