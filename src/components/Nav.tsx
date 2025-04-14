import { Link } from "react-router-dom";
// components/Nav.tsx

export function Nav(){
    return(
        <nav className= "nav">
            <Link to= "/">Início</Link>    
        </nav>
    );
}