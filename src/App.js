import './App.css';
import NavigationBar from './components/Nav/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      {/* <NavigationBar /> */}
        <Routes>
          <Route path="/"  element={<Home />} />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
