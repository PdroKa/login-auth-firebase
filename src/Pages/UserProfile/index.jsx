import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'

function UserProfile() {
  const { currentUser, logOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logOut()
      navigate('/login')
    } catch (error) {
      alert('Ocorreu um erro ao tentar efetuar o logout')
      console.log(error)
    }
  }

  return (
    <div className="container">
      <h1>Perfil do usuario</h1>
      <button onClick={handleLogout}>Sair</button>

      <table>
        <thead>
          <tr>
            <th>Email</th>
          </tr>
          <tr>
            <th>Açoes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentUser.email}</td>
          </tr>
          <tr>
            <td>Atualizar perfil do usuario</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserProfile
