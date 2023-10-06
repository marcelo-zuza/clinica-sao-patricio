import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError()
  

  return (
    <div id="error-page">
        <div className="py-8">
            <h1 className="text-4xl">404 PÁGINA NÃO ENCONTRADA</h1>

        </div>
    </div>
  )
}

export default ErrorPage