import './App.css';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/Pages/User/User';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/user/:login' element={<User />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
