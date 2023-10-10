import { useRef, useState } from 'react'
import { LuLoader2 } from 'react-icons/lu'
import { MdLock, MdMail } from 'react-icons/md'

import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../Context/authContext'
import { EyeOffIcon } from '../../assets/SVGs/EyeOff'
import { EyeIcon } from '../../assets/SVGs/Eye'

const Login = () => {
  const navigate = useNavigate()

  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)

  const passwordRef = useRef()
  const emailRef = useRef()

  const iconsViewPassword = {
    text: <EyeIcon />,
    password: <EyeOffIcon />,
  }
  const [icoViewPassword, setIcoViewPassword] = useState(iconsViewPassword.text)
  const viewPassword = (e) => {
    e.preventDefault()

    setTimeout(function () {
      setIcoViewPassword(iconsViewPassword.text)
      return passwordRef.current.setAttribute('type', 'password')
    }, 2000)

    setIcoViewPassword(iconsViewPassword.password)
    passwordRef.current.setAttribute('type', 'text')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const { value: password } = passwordRef.current
    const { value: email } = emailRef.current

    if (password < 6) {
      toast.warning('Senha deve ter no minimo 6 caracters')
      return setLoading(false)
    }
    if (email === '') {
      toast.warning('E-mail pode estar invalido')
      return setLoading(false)
    }

    try {
      await toast.promise(signIn(email, password), {
        pending: 'Carregando...',
        success: `Bem-vindo ${email}`,
        error: 'E-mail ou senha invalidos',
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
              Login
            </h1>
            <p className="text-sm text-gray-500 md:text-base ">
              Faça login para acessar sua conta
            </p>
          </header>

          <div className="m-6">
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  disabled={loading}
                  placeholder="Seu E-mail"
                  className="peer w-full rounded-md bg-slate-900 px-6 py-3 indent-2 text-sm text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 md:text-base"
                />
                <MdMail className="absolute left-2 top-4 text-sm text-slate-500 peer-focus:text-indigo-500 md:top-[14px] md:text-xl" />
                <p className="mt-2 hidden text-xs text-pink-600 peer-invalid:block md:text-sm">
                  Endereço de email invalido
                </p>
              </div>

              <div className="relative mb-6">
                <input
                  type="password"
                  name="password"
                  ref={passwordRef}
                  disabled={loading}
                  placeholder="Sua senha"
                  className="peer w-full rounded-md bg-slate-900 px-6 py-3 indent-2 text-sm text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 md:text-base"
                />
                <MdLock className="absolute left-2 top-4 text-sm text-slate-500 peer-focus:text-indigo-500 md:top-[14px] md:text-xl" />
                <button type="button" onClick={(e) => viewPassword(e)}>
                  {icoViewPassword}
                </button>
              </div>
              <div className="mb-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="mx-auto flex w-full flex-row items-center justify-center rounded-md bg-indigo-500 pb-3 pt-2 text-base text-white outline-none transition-all duration-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none md:text-lg"
                >
                  {loading ? (
                    <>
                      <span>Carregando</span>
                      <LuLoader2 className="my-auto ml-1 animate-spin" />
                    </>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </div>

              <footer className="flex flex-col gap-3">
                <p className="text-center text-xs text-gray-500 md:text-base">
                  Esqueceu a senha ?
                  <Link
                    className="ml-1 font-semibold text-indigo-500 outline-none hover:text-indigo-600 hover:underline focus:text-indigo-600 focus:underline"
                    to={'/forgot-password'}
                  >
                    Resetar senha
                  </Link>
                </p>

                <p className="text-center text-xs font-bold text-gray-500 md:text-base">
                  Criar nova conta ?
                  <Link
                    className="ml-1 font-semibold text-indigo-500 outline-none hover:text-indigo-600 hover:underline focus:text-indigo-600  focus:underline"
                    to={'/signup'}
                  >
                    Cadastrar
                  </Link>
                </p>
              </footer>
              <div className="center">
                <div>
                  <p></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
