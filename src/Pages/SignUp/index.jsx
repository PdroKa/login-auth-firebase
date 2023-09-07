import { useState } from 'react'
import { useAuth } from '../../Context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    if (password.length < 6) {
      alert('Senha deve ter no minimo 6 caracters')
    }
    if (password !== confirmPassword) {
      setLoading(false)
      return alert('Senhas não conferem')
    }

    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      alert('Ocorreu um erro ao tentar criar o usuario')
    }
    setLoading(false)
  }
  return (
    <>
      <div className="container">
        <h2>Cadastro de usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <label>Senha</label>
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <label>Confirme sua senha</label>
          <input
            value={confirmPassword}
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
          />

          <button disabled={loading} className="button-block" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="center">
          <div>
            <p>
              Já possui uma conta ? <Link to={'/'}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
