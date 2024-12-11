import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CreactBlog from './MyRouter/CreactBlog';
import Home from './MyRouter/Home'
import Navbar from './MyRouter/Navbar';
//import PageNotFound from './MyRouters/PageNotFound';


function App() {
  
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
{/* <h5 className="text-lg mb-2">Country</h5>
            <input type="text" placeholder="Enter country" className="w-full mb-2 p-2 border" /> */}

        
            
  return (
    <>
  
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path='/Home' element={<Home data2={data}/>} />
          <Route path='/CreactBlog' element={<CreactBlog />} />

          <Route path='/*' element={<Navigate to='/Home'/>} />
        </Routes>
      </BrowserRouter>
     
      
    </>
  )
}

export default App;
