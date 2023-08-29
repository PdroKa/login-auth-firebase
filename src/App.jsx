import AuthProvider from './Context/authContext'
import RoutesVerify from './Routes'
function App() {
  return (
    <AuthProvider>
      <RoutesVerify />
    </AuthProvider>
  )
}

export default App
