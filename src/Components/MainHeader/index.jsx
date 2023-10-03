import { useState } from 'react'
import { useAuth } from '../../Context/authContext'
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function MainHeader() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const { logOut } = useAuth()
  const handleLogout = () => {
    setLoading(true)
    logOut()
    navigate('/')
  }

  return (
    <header className="layout-header flex border-collapse items-center justify-between border-b border-b-zinc-400 bg-slate-900 p-11 md:p-6">
      <h1 className="text-white">Ola Kauan</h1>
      <button
        disabled={loading}
        onClick={handleLogout}
        className="flex items-center gap-2 text-base text-gray-400 transition-all hover:text-indigo-300"
      >
        Sair
        <MdLogout />
      </button>
    </header>
  )
}

export default MainHeader
