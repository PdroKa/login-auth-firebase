import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button'

function PageError() {
  const navigate = useNavigate()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900">
      <div className="mb-6 flex flex-col items-center  text-white">
        <h1 className="text-center text-4xl font-light ">Error 404</h1>
        <div className="relative flex">
          <span className=" text-center ">
            Página não encontrada ¯\_(ツ)_/¯
          </span>
          <span className="ml-2 w-0 animate-ping after:text-sm after:text-white after:content-['|']" />
        </div>
      </div>
      <button type="button"></button>
      <Button.Root onClick={() => navigate('/')} bg={'primary'}>
        <Button.Content dataLoading="Carregando">
          Retornar a pagina Home
        </Button.Content>
      </Button.Root>
    </div>
  )
}

export default PageError
