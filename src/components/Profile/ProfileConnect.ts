import {connect} from "react-redux";
import Profile from "./Profile";
import {saveNewStatus} from "../../Redux/StatusReducer";


const mapStateToProps = (state:any) => {
    return {
        isAuth: state.auth.isAuth,
        status:state.statusPage.status
    }
};


const ConnectedProfile = connect(mapStateToProps, {saveNewStatus})(Profile);
export default ConnectedProfile;