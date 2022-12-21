import './App.css';
import Header from './Components/Header';
import HomeSpecials from './Components/HomeSpecials';
import Searching from './Components/Searching';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searching />
      <HomeSpecials />
    </div>
  );
}

export default App;
