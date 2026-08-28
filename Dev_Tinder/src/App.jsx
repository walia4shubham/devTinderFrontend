import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import SetDatas from './components/Set.jsx'
import Todo from './components/Todo.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/login.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import RoughWork from './components/RoughWork.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SetDatas />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/roughWork/:id" element={<RoughWork />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App