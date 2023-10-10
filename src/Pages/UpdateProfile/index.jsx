import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { Input } from '../../Components/inputText'
import { MdMail } from 'react-icons/md'
import { toast } from 'react-toastify'

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
      await toast.promise(updateEmailAdress(email), {
        pending: 'Carregando...',
        success: `Email atualizado para ${email}`,
        error: 'Ocorreu um erro ao tentar atualizar Email',
      })
      navigate('/')
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-3xl text-white">Atualizar perfil</h1>
      <div></div>
      <div className="my-2 flex items-center text-xl text-white">
        <div>Email</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <input
            type="email"
            value={email}
            placeholder="Seu E-mail"
            disabled={loading}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="peer w-full rounded-md bg-slate-600 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <MdMail className="absolute left-2 top-[14px]  text-xl text-zinc-500 peer-focus:text-indigo-500" />
          <p className="invisible mt-1 text-sm text-pink-600 peer-invalid:visible">
            Endereço de email invalido
          </p>
        </div>
        <div>
          <button
            disabled={loading}
            className="w-full rounded-md bg-indigo-500 pb-3 pt-2 text-white outline-none transition-all duration-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
            type="submit"
          >
            Atualizar Perfil
          </button>
        </div>
      </form>
    </>
  )
}

export default UpdateProfile
