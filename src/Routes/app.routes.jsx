import { Navigate, Route, Routes } from 'react-router-dom'
import UserProfile from '../Pages/UserProfile'
import UpdateProfile from '../Pages/UpdateProfile'
import Layout from '../Components/Layout'
import PageError from '../Pages/Error404'

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/update-profile" exact element={<UpdateProfile />} />
        <Route path="/" exact element={<UserProfile />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </Layout>
  )
}
export default AppRoutes
