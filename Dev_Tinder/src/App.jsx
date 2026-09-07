import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import SetDatas from './components/Set.jsx'
import Profile from './components/Profile.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/login.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import RoughWork from './components/RoughWork.jsx'
import Feed from './components/Feed.jsx'
import ProtectedRoute, { PublicRoute } from './components/ProtectedRoute.jsx'
import RequestConnections from './components/RequestConnections.jsx'
import ChatSocket from './components/ChatSocket.jsx'
import { Oops } from './components/Oops.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/todo" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/roughWork" element={<RoughWork />} />
        <Route path='/feed' element={<ProtectedRoute><Feed/></ProtectedRoute>} />
        <Route path="/requestConnections" element={<RequestConnections />} />
        <Route path="/chat/:otheUserId" element={<ChatSocket />} />
        <Route path='/oops' element={<Oops/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App