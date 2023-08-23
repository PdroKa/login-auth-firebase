import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../Components/Container'
import { Input } from '../../Components/inputText'
import { useState } from 'react'
import { useAuth } from '../../Context/authContext'

function ForgotPassword() {
  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await resetPassword(email)
      alert('Foi enviado um email para resetar sua senha')
      navigate('/login')
    } catch (error) {
      alert('Ocorreu um erro ao resetar sua senha')
    }
    setLoading(false)
  }
  return (
    <Container>
      <h1>Esqueci a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type={'email'}
        />
        <button disabled={loading} className="button-block mb-8">
          Recuperar senha
        </button>
        <div className="flex items-center justify-center flex-col">
          <div>
            <p>
              Já tem uma conta ? <Link to={'/'}>Entrar</Link>
            </p>
            <p>
              Não tem uma conta ? <Link to={'/signup'}>Cadastre-se</Link>
            </p>
          </div>
        </div>
      </form>
    </Container>
  )
}
export default ForgotPassword
