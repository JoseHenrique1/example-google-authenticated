import { Link } from "react-router";

export function PrivateRoute() {

  return (
    <>
      <h1>Rota protegida</h1>
      <p>Só consegue acessar essa rota apos fazer o login</p>
      <Link to={"/"}>Voltar a pagina inicial</Link>
    </>
  )
}
