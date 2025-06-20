import { Link } from "react-router";
import { Space } from "../components/space";

export function App() {

  async function login() {
    /* const response = await fetch('http://localhost:5000/google')
    const data = await response.json()
    console.log("data" , data); */

    // Ao clicar no botão de login
    window.location.href = "http://localhost:5000/google";

  }

  return (
    <div className="p-4">
      <h1>Autenticação com o Google</h1>
      <Link to={"private-route"}>Rota privada</Link>

      <Space />

      <h3>Autenticação</h3>
      <div className="flex gap-4">
        <button onClick={login}>Login</button>
        <button>Cadastro</button>
      </div>
    </div>
  )
}
