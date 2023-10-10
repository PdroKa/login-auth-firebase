import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { toast } from 'react-toastify'

function UserProfile() {
  const { currentUser } = useAuth()

  return (
    <>
      <h1 className="text-3xl text-white">Home</h1>
      <div className="my-2 flex items-center justify-between text-xl text-white">
        <div>Email</div>
        <div>Açoes</div>
        <div></div>
      </div>
      <div className="group flex items-center justify-between rounded-lg bg-slate-700 p-3 text-center text-slate-300">
        <p className="transition group-hover:text-slate-200">
          {currentUser.email}
        </p>
        <Link
          to={'/update-profile'}
          className="font-semibold text-slate-500 transition-all hover:underline group-hover:text-slate-400"
        >
          Atualizar perfil do usuario
        </Link>
        <div></div>
      </div>
    </>
  )
}
export default UserProfile
