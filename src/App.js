import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Card from './pages/dashboard/component/Card';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/home" element={<HomePage />}/> */}
          <Route path='/home' element={<Card/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
