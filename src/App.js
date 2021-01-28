import './App.css';
import MainMenu from "./components/mainMenu/mainMenu";
import MainPhoto from "./components/mainPhoto/mainPhoto";
import Content from "./components/content/content";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <MainPhoto />
        <MainMenu />
        <Content />
      </div>
    </Router>
  );
}

export default App;
