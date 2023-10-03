import { useNavigate } from 'react-router-dom'

function PageError() {
  const navigate = useNavigate()
  return (
    <div className="h-full w-full bg-slate-900">
      <div className="mb-6 flex flex-col items-center text-white">
        <h1 className="text-center text-4xl font-light ">Error 404</h1>
        <div className="relative flex">
          <span className=" text-center ">
            Página não encontrada ¯\_(ツ)_/¯
          </span>
          <span className="ml-2 w-0 animate-ping after:text-sm after:text-white after:content-['|']" />
        </div>
      </div>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="w-full rounded-md bg-indigo-500 pb-3 pt-2 text-white outline-none transition-all duration-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
      >
        Retornar a pagina Home
      </button>
    </div>
  )
}

export default PageError
