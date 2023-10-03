import "./LoginStyles.css";
import React, {useState} from "react";
import {Form} from "semantic-ui-react";
import AuthService from "../../../services/AuthService";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async () => {
        await AuthService.login(data.username, data.password);
        navigate("/home");
        window.location.reload();
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    return (
        <div className="Auth-form-container">
            <Form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title"> Inicio de Sesión </h3>
                    <div className="form-group mt-3">
                        <label> Usuario </label>
                        <input
                            name="username"
                            className="form-control mt-1"
                            placeholder="Introduce usuario"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label> Contraseña </label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Introduce contraseña"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Iniciar
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Se te ha olvidado la <a href="#">contraseña?</a>
                    </p>
                </div>
            </Form>
        </div>
    );
}

export default Login