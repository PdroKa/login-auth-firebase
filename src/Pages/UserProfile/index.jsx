import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { Container } from '../../Components/Container'
import Layout from '../../Components/Layout'
import { useMemo } from 'react'

function UserProfile() {
  const { currentUser, logOut } = useAuth()
  // const navigate = useNavigate()

  const pageData = { title: 'Atualizar Perfil', lineColor: 'bg-indigo-500' }
  // async function handleLogout() {
  //   try {
  //     await logOut()
  //     navigate('/')
  //   } catch (error) {
  //     alert('Ocorreu um erro ao tentar efetuar o logout')
  //     console.log(error)
  //   }
  // }
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
