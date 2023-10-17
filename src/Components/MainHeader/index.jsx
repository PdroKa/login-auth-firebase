import { useAuth } from '../../Context/authContext'
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function MainHeader() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  const navigate = useNavigate()

  const { logOut } = useAuth()
  const handleLogout = () => {
    toast.promise(logOut(), {
      pending: 'Ate logo...',
      success: `Volte logo`,
      error: 'E-mail ou senha invalidos',
    })

    navigate('/')
  }

  return (
    <>
      <header className="layout-header flex border-collapse items-center justify-between border-b border-b-zinc-400  bg-slate-200 p-11 dark:bg-slate-900 md:p-6">
        <h1 className="text-white">Ola Kauan</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-base text-gray-400 transition-all hover:text-indigo-300"
        >
          Sair
          <MdLogout />
        </button>
      </header>
    </>
  )
}

export default MainHeader
