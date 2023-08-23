import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { Input } from '../../Components/inputText'
import { Container } from '../../Components/Container'

function UpdateProfile() {
  const navigate = useNavigate()
  const { updateEmailAdress, currentUser } = useAuth()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(currentUser.email)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    if (currentUser.email === email) {
      setLoading(false)
      return navigate('/')
    }

    try {
      await updateEmailAdress(email)
      navigate('/')
    } catch (error) {
      alert('Ocorreu um erro ao tentar atualizar Email')
      setLoading(false)
    }
  }

  return (
    <Container>
      <div className="flex justify-between items-center w-full">
        <h2>Atualizar Perfil</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          value={email}
          disabled={loading}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="email"
        />

        <button disabled={loading} className="button-block" type="submit">
          Atualizar Perfil
        </button>
      </form>
    </Container>
  )
}

export default UpdateProfile
