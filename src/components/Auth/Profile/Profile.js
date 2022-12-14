import "./ProfileStyles.css"
import {Button} from "semantic-ui-react";
import AuthService from "../../../services/AuthService";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    function handleSubmitLogOut() {
        AuthService.logout();
        navigate("/login");
    }

    return (
        <div>
            <div className="pf1">
                <div>
                    <Button className="pf2" onClick={handleSubmitLogOut}> Cerrar sesión </Button>
                </div>
            </div>
        </div>
    )
}

export default Profile