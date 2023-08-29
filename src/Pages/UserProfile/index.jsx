import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { Container } from '../../Components/Container'

function UserProfile() {
  const { currentUser, logOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      alert('Ocorreu um erro ao tentar efetuar o logout')
      console.log(error)
    }
  }

  return (
    <Container>
      <header className="flex justify-between items-center w-full">
        <h1>Perfil do usuario</h1>
        <button onClick={handleLogout}>Sair</button>
      </header>

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
            <td>
              <Link to={'/update-profile'}>Atualizar perfil do usuario</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default UserProfile
