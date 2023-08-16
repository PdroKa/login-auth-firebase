import { useState } from 'react'
import { useAuth } from '../../Context/authContext'

const SignUp = () => {
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    let message = ''

    if (password.length < 6) {
      message = 'Senha deve ter no minimo 6 caracters'
      return alert(message)
    }
    if (password !== confirmPassword) {
      message = 'Senhas não conferem'
      return alert(message)
    }

    try {
      await signUp(email, password)
    } catch (error) {
      alert('Ocorreu um erro ao tentar criar o usuario')
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

          <button className="button-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
