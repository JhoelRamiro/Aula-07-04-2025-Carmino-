import { Registros } from "../components/Registros";
import { Link } from "react-router-dom";
// pages/Home.tsx
export function Home() {
    return(
        <section className="login">
            <h3 className= "page-title">Login</h3>
            
            <p className= "email">E-mail</p>
            <input className="txtEmail" type="text" id="Email" name="text"></input>
            
            <br/>

            <p className= "senha">Senha</p>
            <input className="txtSenha" type="text" id="Senha" name="text"></input>

            <Link to="/registros">
                <button className="botão">Enviar</button>
            </Link>

            
            
        </section>
    )
}