
import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';



export default function HeaderComponent() {

    //const authContext = useContext(AuthContext);
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
    //console.log(authContext)

    const logout=()=> authContext.logout

    

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="">R_tech.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item fs-5">
                                {isAuthenticated
                                    && <Link className="nav-link" to="/welcome/Rohitkarma">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated
                                    && <Link className="nav-link" to="/todos">Todos</Link>}
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated
                                    &&
                                    <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated
                                    &&
                                    <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    

    )
}