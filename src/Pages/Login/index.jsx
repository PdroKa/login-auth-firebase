import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { Input } from '../../Components/inputText'

import { Container } from '../../Components/Container'
import { MdLock, MdMail, MdPassword } from 'react-icons/md'

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
    }
  }

  return (
    <>
      <Container>
        <div className="container my-auto max-w-md rounded-lg border-neutral-800 bg-zinc-800 p-3 shadow-sm">
          <header className=" my-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-200">Login</h1>
            <p className="text-gray-500">Faça login para acessar sua conta</p>
          </header>

          <div className="m-6">
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  disabled={loading}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  placeholder="Seu E-mail"
                  className="peer w-full rounded-md bg-zinc-900 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <MdMail className="absolute left-2 top-[14px]  text-xl text-zinc-500 peer-focus:text-indigo-500" />
                <p className="mt-2 hidden text-sm text-pink-600 peer-invalid:block">
                  Endereço de email invalido
                </p>
              </div>

              <div className="relative mb-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  disabled={loading}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  placeholder="Sua senha"
                  className="peer w-full rounded-md bg-zinc-900 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <MdLock className="absolute left-2 top-[14px] text-xl text-zinc-500 peer-focus:text-indigo-500" />
              </div>
              <div className="mb-6">
                <button
                  disabled={loading}
                  type="button"
                  className="w-full rounded-md bg-indigo-500 pb-3 pt-2 text-white transition-all duration-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
                >
                  {loading ? 'Carregando...' : 'Entrar'}
                </button>
              </div>

              <footer className="flex flex-col gap-3">
                <p className="text-center text-sm text-gray-500">
                  Esqueceu a senha ?
                  <Link
                    className="ml-1 font-semibold text-indigo-500 hover:text-indigo-600 hover:underline focus:text-indigo-600 focus:underline"
                    to={'/forgot-password'}
                  >
                    Resetar senha
                  </Link>
                </p>

                <p className="text-center text-sm text-gray-500">
                  Criar nova conta ?
                  <Link
                    className="ml-1 font-semibold text-indigo-500 hover:text-indigo-600 hover:underline focus:text-indigo-600  focus:underline"
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
      </Container>
    </>
  )
}

export default Login
