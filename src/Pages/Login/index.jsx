import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { Input } from '../../Components/inputText'
import { Container } from '../../Components/Container'

const Login = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    if (password.length < 6) {
      alert('Senha deve ter no minimo 6 caracters')
      setLoading(false)
      return
    }

    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      alert('Ocorreu um erro ao tentar efetuar o login')
      setLoading(false)
    }
  }

  return (
    <>
      <Container>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label={'Email'}
            value={email}
            disabled={loading}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <Input
            label={'Password'}
            value={password}
            disabled={loading}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <button disabled={loading} className="button-block" type="submit">
            {loading ? 'Carregando...' : 'Login'}
          </button>

          <div className="center">
            <div>
              <p>
                Esqueceu a senha ?
                <Link to={'/forgot-password'}>Resetar senha</Link>
              </p>
              <p>
                Criar nova conta ?<Link to={'/signup'}>Cadastrar</Link>
              </p>
            </div>
          </div>
        </form>
      </Container>
    </>
  )
}

export default Login
