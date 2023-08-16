import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './Context/authContext'
import UserProfile from './Pages/UserProfile'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<UserProfile />} />
          <Route path="*" element={<h1>Rota não encontrada</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
