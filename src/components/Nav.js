import { Link , Outlet} from "react-router-dom";
import logo from "../images/logo.png";
export const Nav = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    
                    <ul className="nav nav-tabs">
                        <li>
                            <div>
                            <img src = {logo} width="50" height="50"/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link active" to = "/">Competences</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "/becas">Becas</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
            <Outlet />
        </>






    )




}