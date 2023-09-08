import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import ItemPage from './Components/ItemPage/ItemPage';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/item/:itemName" element={<ItemPage />} />
      </Routes>

    </Router>
  );
}

export default App;