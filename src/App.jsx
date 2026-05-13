// global css
import '../src/styles/App.css'



// Page imports
import Home from '../pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    // <div>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

    </BrowserRouter>
     )
} 






export default App
