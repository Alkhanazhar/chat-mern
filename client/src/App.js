import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Chat from './components/Chat'
import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8080'
const App = () => {
  return (
    <Routes>
      <Route path='/chat' element={<Chat />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App