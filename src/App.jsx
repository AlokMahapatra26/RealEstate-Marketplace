import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/sign-in" element={<Signin/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
    </Router>
    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}