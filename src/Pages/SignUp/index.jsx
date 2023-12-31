import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'

import { LuLoader2 } from 'react-icons/lu'
import { MdLock, MdMail } from 'react-icons/md'
import { toast } from 'react-toastify'
import { Button } from '../../Components/Button'

const SignUp = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const { value: email } = emailRef.current
    const { value: password } = passwordRef.current
    const { value: confirmPassword } = confirmPasswordRef.current

    if (password.length < 6) {
      toast.warning('Senha deve ter no minimo 6 caracters')
      return setLoading(false)
    }
    if (password !== confirmPassword) {
      toast.warning('Senhas não conferem')
      return setLoading(false)
    }

    try {
      await toast.promise(signUp(email, password), {
        pending: 'Carregando...',
        success: `Bem-vindo ${email}`,
        error: 'Ocorreu um erro ao tentar criar o usuario',
      })
      navigate('/')
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="flex h-full max-h-screen items-center justify-center bg-slate-900 font-sans">
        <div className="w-full max-w-[360px] rounded-lg border-slate-800 bg-slate-800 p-3 shadow-sm md:max-w-md">
          <header className="my-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-200 md:text-3xl">
              Cadastro de usuario
            </h1>
            <p className="text-sm text-slate-500 md:text-base">
              Faça seu cadastro para acessar
            </p>
          </header>

          <div className="m-6">
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Seu E-mail"
                  className="peer w-full rounded-md bg-slate-900 px-6 py-3 indent-2  text-sm text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 md:text-base"
                />
                <MdMail className="absolute left-2 top-4 text-sm text-slate-500 peer-focus:text-indigo-500 md:top-[14px] md:text-xl" />
                <p className="mt-2 hidden text-xs text-pink-600 peer-invalid:block md:text-sm">
                  Endereço de email invalido
                </p>
              </div>

              <div className="relative mb-4">
                <input
                  ref={passwordRef}
                  type="password"
                  min={'6'}
                  placeholder="Sua senha"
                  className="peer w-full rounded-md bg-slate-900 px-6 py-3 indent-2 text-sm text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 md:text-base"
                />
                <MdLock className="absolute left-2 top-4 text-sm text-slate-500 peer-focus:text-indigo-500 md:top-[14px] md:text-xl" />
              </div>

              <div className="relative mb-4">
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="Confirme sua senha"
                  className="peer w-full rounded-md bg-slate-900 px-6 py-3 indent-2 text-sm text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 md:text-base"
                />
                <MdLock className="absolute left-2 top-4 text-sm text-slate-500 peer-focus:text-indigo-500 md:top-[14px] md:text-xl" />
              </div>

              <div className="mb-6">
                <Button.Root bg={'primary'} size={'full'} loading={loading}>
                  <Button.Content>Entrar</Button.Content>
                  {loading && <Button.Icon size={'xl'} Icon={LuLoader2} />}
                </Button.Root>
              </div>

              <footer className="flex flex-col gap-3">
                <p className="text-center text-sm text-gray-500">
                  Já possui uma conta ?{' '}
                  <Link
                    className="ml-1 font-semibold text-indigo-500 outline-none hover:text-indigo-600 hover:underline focus:text-indigo-600 focus:underline"
                    to={'/'}
                  >
                    Login
                  </Link>
                </p>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
