import { Route, Routes } from 'react-router-dom'
import UserProfile from '../Pages/UserProfile'
import UpdateProfile from '../Pages/UpdateProfile'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/update-profile" exact element={<UpdateProfile />} />
      <Route path="/" exact element={<UserProfile />} />
      <Route path="*" element={<h1>Rota não encontrada</h1>} />
    </Routes>
  )
}
export default AppRoutes
