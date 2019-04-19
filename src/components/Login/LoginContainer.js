import {connect} from "react-redux";
import Login from "./Login";
import {loginUp} from "../../Redux/LoginReducer";



const mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        status: state.loginPage.status,
        message: state.loginPage.message,
        // captchaUrl: state.login.captchaUrl
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (login, password, rememberMe) => {
        dispatch(loginUp(login, password, rememberMe))
    },

});


const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default ConnectedLogin;