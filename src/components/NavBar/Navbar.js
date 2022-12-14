import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import {Component} from "react";
import {MenuData} from "./MenuData";

class Navbar extends Component {
    state = {clicked: false, isLogged: false};

    // Method to retrieve the value from localStorage and update state
    getIsLogged = () => {
        const isLogged = localStorage.getItem('isLogged');
        this.setState({isLogged});
    }

    // When the component mounts, call the getValue method
    componentDidMount() {
        this.getIsLogged();
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return (
            <nav className="NavbarItems">

                <Link to="/home">
                    <h1 className="logo fa-solid fa-bicycle">
                        BMX STORE
                    </h1>
                </Link>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i
                        className={this.state.clicked ? "fa-sharp fa-solid fa-xmark" : "fas fa-bars"}
                    ></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {localStorage.getItem("isLogged") ?
                    (<div>
                        <div>
                            <a href="/read">
                                <div className="fa-solid fa-pen"> EDIT Productos
                                </div>
                            </a>
                        </div>
                    </div>)

                    :

                    (<div></div>)
                }
                {localStorage.getItem("isLogged") ?
                    (<div>
                        <div>
                            <a href="/profile">
                                <div className="fa-solid fa-user">
                                </div>
                            </a>
                        </div>
                    </div>)

                    :

                    (<div className="logreg">
                        <Link to={'/register'}>
                            Registrarse /
                        </Link>
                        <Link to={'/login'}>
                            / Iniciar Sesión
                        </Link>
                    </div>)
                }

            </nav>
        );
    }
}

export default Navbar;