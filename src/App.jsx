import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Component/Auth/Login'
import './App.css'
import Dashboard from './Component/Dashboard'
import DetailPage from './Component/DetailPage'
import SignUp from './Component/Auth/SignUp'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/detailpage' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
