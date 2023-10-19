import { useState } from 'react'
import { MdMail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../Context/authContext'
import { Button } from '../../Components/Button'
import { LuLoader2 } from 'react-icons/lu'

function ForgotPassword() {
  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await toast.promise(resetPassword(email), {
        pending: 'Carregando...',
        success: `Foi enviado um email a ${email} para resetar sua senha`,
        error: 'Ocorreu um erro ao Enviar E-mail',
      })
      navigate('/')
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <div className="flex h-full max-h-screen items-center justify-center bg-slate-900 font-sans">
      <div className="transparent container my-auto max-w-md rounded-lg border-neutral-800 p-3 shadow-sm">
        <header className="my-6 text-center">
          <h1 className="text-3xl text-gray-200">Recuperar senha</h1>
        </header>
        <div className="m-6">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Seu E-mail"
                className="peer w-full rounded-md border border-neutral-500 bg-slate-900 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />

              <MdMail className="absolute left-2 top-[14px] text-xl text-zinc-500 peer-focus:text-indigo-500" />
              <p className="mt-2 hidden text-sm text-pink-600 peer-invalid:block">
                Endereço de email invalido
              </p>
            </div>
            <div className="mb-6">
              <Button.Root bg={'primary'} loading={loading}>
                <Button.Content dataLoading="Enviando Email" loading={loading}>
                  Recuperar senha
                </Button.Content>
                {loading && <Button.Icon animate={'spin'} Icon={LuLoader2} />}
              </Button.Root>
            </div>
            <footer className="flex flex-col gap-3">
              <p className="text-center text-sm text-gray-500">
                Já tem uma conta ?{' '}
                <Link
                  className="focus:indigo-600 focus:indigo-500 ml-1 font-semibold text-indigo-500 outline-none hover:text-indigo-600 hover:underline 
                  focus:text-indigo-600 focus:underline"
                  to={'/'}
                >
                  Entrar
                </Link>
              </p>
              <p className="text-center text-sm text-gray-500">
                Não tem uma conta ?{' '}
                <Link
                  className="ml-1 font-semibold 
                  text-indigo-500 outline-none transition-all hover:text-indigo-600 hover:underline 
                  focus:text-indigo-600
                  focus:underline"
                  to={'/signup'}
                >
                  Cadastre-se
                </Link>
              </p>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ForgotPassword
