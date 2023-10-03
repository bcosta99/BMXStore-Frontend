import "./RegisterStyles.css";
import React, {useState} from "react";
import {Form} from "semantic-ui-react";
import AuthService from "../../../services/AuthService";
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async () => {
        await AuthService.register(data.username, data.email, data.password);
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
                    <h3 className="Auth-form-title"> Crear Cuenta </h3>
                    <div className="form-group mt-3">
                        <label> Usuario </label>
                        <input
                            name="username"
                            className="form-control mt-1"
                            placeholder="Enter username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default Register