import {connect} from "react-redux";
import {getUsers, subscribe, unsubscribe} from "../../Redux/UsersReducer";
import Members from "./Members";
import {AppState} from "../../Redux/Redux-store";


const mapStateToProps = (state: AppState) => {
    return {
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg
    }
};

const ConnectedMembers = connect(mapStateToProps, {getUsers, subscribe, unsubscribe})(Members);
export default ConnectedMembers;