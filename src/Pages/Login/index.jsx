import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'

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
      console.log(error)
    }
  }
  return (
    <>
      <div className="container">
        <h2>Cadastro de usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            value={email}
            disabled={loading}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <label>Senha</label>
          <input
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
        </form>
      </div>
    </>
  )
}

export default Login
