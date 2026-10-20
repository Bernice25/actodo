import './App.css';
import Login from './component/pages/login';
import Signup from './component/pages/SignUp';
import LandingPage from './component/pages/LandingPage';
import { Route, Routes, BrowserRouter ,  } from "react-router-dom"
import { useState } from "react"

function App()
{
  const [Users, setusers] = useState(
        [
             {
            username:"bernice",
            password:"123"
          
          }])



  return(<div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login Users={Users} setusers={setusers} />}></Route>
      <Route path='/Signup' element={<Signup Users={Users} setusers={setusers}/>}></Route> 
      <Route path='/LandingPage' element={<LandingPage/>}></Route>

    </Routes>

  </BrowserRouter>
</div>)
}
export default App;