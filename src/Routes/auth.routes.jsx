import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import ForgotPassword from '../Pages/ForgotPassword'

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/forgot-password" exact element={<ForgotPassword />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  )
}
export default AuthRoutes
