import './App.css';
import MainMenu from "./components/mainMenu/mainMenu";
import MainPhoto from "./components/mainPhoto/mainPhoto";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (

      <div className="App">
        <MainPhoto />
        <MainMenu />
        <Content />
      </div>
  );
}

export default App;
