import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

function RoutesVerify() {
  const { currentUser } = useAuth()
  return (
    <BrowserRouter>
      {!currentUser ? <AuthRoutes /> : <AppRoutes />}
    </BrowserRouter>
  )
}
export default RoutesVerify
