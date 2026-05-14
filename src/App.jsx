// imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// css
import '../src/styles/App.css'

// Page imports
import Home from '../pages/Home.jsx';
import Menu from '../pages/Menu.jsx';


function App() {


  return (
    // <div>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />

      </Routes>

    </BrowserRouter>
     )
} 






export default App
