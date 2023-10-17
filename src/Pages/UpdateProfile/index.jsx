import { useState } from 'react'
import { MdMail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../Context/authContext'
import { Button } from '../../Components/Button'
import { LuLoader2 } from 'react-icons/lu'

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
        <div className="relative mb-1">
          <input
            type="email"
            value={email}
            placeholder="Seu E-mail"
            disabled={loading}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="peer w-full rounded-md bg-slate-700 px-6 py-3 indent-2 text-zinc-400 placeholder-neutral-500 transition-all focus:border-indigo-600 focus:text-zinc-100 focus:outline-none focus:ring focus:ring-indigo-600"
          />
          <MdMail className="absolute left-2 top-[14px] text-xl text-zinc-500 peer-focus:text-zinc-300" />
          <p className="invisible mt-1 text-sm text-pink-600 peer-invalid:visible">
            Endereço de email invalido
          </p>
        </div>
        <div>
          <Button.Root type="submit" bg={'primary'} loading={loading}>
            <Button.Content dataLoading="Atulizando E-mail" loading={loading}>
              Atualizar Perfil
            </Button.Content>
            {loading && <Button.Icon animate={'spin'} Icon={LuLoader2} />}
          </Button.Root>
        </div>
      </form>
    </>
  )
}

export default UpdateProfile
