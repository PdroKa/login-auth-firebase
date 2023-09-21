import { useState } from 'react'
import { useAuth } from '../../Context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../Components/Container'

import { MdLock, MdMail, MdPassword } from 'react-icons/md'

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
      <Container>
        <div className="container my-auto max-w-md rounded-lg border-neutral-800 bg-zinc-800 p-3 shadow-sm">
          <header className="my-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-200">
              Cadastro de usuario
            </h1>
            <p className="text-gray-500">Faça seu cadastro para acessar</p>
          </header>

          <div className="m-6">
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <input
                  value={email}
                  type="email"
                  placeholder="Seu E-mail"
                  className="peer w-full rounded-md bg-zinc-900 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <MdMail className="absolute left-2 top-[14px] text-xl text-zinc-500 peer-focus:text-indigo-500" />
              </div>

              <div className="relative mb-4">
                <input
                  value={password}
                  type="password"
                  min={'6'}
                  placeholder="Sua enha"
                  className="peer w-full rounded-md bg-zinc-900 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <MdLock className="absolute left-2 top-[14px] text-xl text-zinc-500 peer-focus:text-indigo-500" />
              </div>

              <div className="relative mb-4">
                <input
                  value={confirmPassword}
                  type="password"
                  placeholder="Confirme sua senha"
                  className="peer w-full rounded-md bg-zinc-900 px-6 py-3 indent-2 text-white placeholder-neutral-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                />
                <MdLock className="absolute left-2 top-[14px] text-xl text-zinc-500 peer-focus:text-indigo-500" />
              </div>

              <div className="mb-6">
                <button
                  disabled={loading}
                  className="w-full rounded-md bg-indigo-500 pb-3 pt-2 text-white transition-all duration-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
                  type="submit"
                >
                  {loading ? 'Carregando...' : 'Cadastrar'}
                </button>
              </div>

              <footer className="flex flex-col gap-3">
                <p className="text-center text-sm text-gray-500">
                  Já possui uma conta ?{' '}
                  <Link
                    className='focus:underline" ml-1 font-semibold text-indigo-500 hover:text-indigo-600 hover:underline focus:text-indigo-600'
                    to={'/'}
                  >
                    Login
                  </Link>
                </p>
              </footer>
            </form>
          </div>

          <div className="center">
            <div></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp
