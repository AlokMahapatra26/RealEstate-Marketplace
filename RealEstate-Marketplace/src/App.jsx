import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import { ToastContainer} from 'react-toastify';
import CreateListing from './pages/CreateListing'
import "react-toastify/dist/ReactToastify.css";
import EditListing from './pages/EditListing'
import Listing from './pages/Listing'

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
          </Route>

          <Route path='/create-listing' element={<PrivateRoute/>}>
          <Route path='/create-listing' element={<CreateListing/>}/>
          </Route>

          <Route path='/edit-listing' element={<PrivateRoute/>}>
          <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
          </Route>
          
          <Route path='/sign-in' element={<Signin/>}/>

          <Route path='/sign-up' element={<Signup/>}/>

          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
        </Routes>
      </Router>
   
<ToastContainer />
    </>
  )
}

export default App
