import './App.css';
import MainMenu from "./components/mainMenu/mainMenu";
import MainPhoto from "./components/mainPhoto/mainPhoto";
import Content from "./components/content/content";
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router basename={'/'}>
      <div className="App">
        <div className="Main">
          <MainPhoto />
          <MainMenu />
        </div>
        <div className="Content">
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
