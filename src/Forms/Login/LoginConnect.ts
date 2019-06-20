import {connect} from "react-redux";
import Login from "./Login";
import {loginUp} from "../../Redux/LoginReducer";



const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        status: state.loginPage.status,
        message: state.loginPage.message,
        // captchaUrl: state.login.captchaUrl
    }
};
const ConnectedLogin = connect(mapStateToProps, {loginUp})(Login);
export default ConnectedLogin;