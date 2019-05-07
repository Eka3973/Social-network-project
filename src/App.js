import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";
import {Route} from "react-router-dom";
import ConnectedNavbarPage from "./components/Navbar/NavbarConnect";
import Profile from "./components/Profile/Profile";
import ConnectedFriends from "./components/FriendsList/FriendsListConnect";
import ConnectedLogin from "./components/Login/LoginConnect";


class App extends React.Component {
    // state = {
    //     //     loggedIn: true
    //     // };

    render() {
        return (
            <div className='appWrapper'>
                <div className='appWrapperHeader'><Header/>
                </div>
                <div className='appWrapperSideContent'>
                    <ConnectedNavbarPage/>
                    <SideBar/>
                </div>
                <div className='appWrapperContent'>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                    <Route exact path='/users' component={ConnectedFriends}/>
                </div>
                <div className='appWrapperLoginPage'>
                    <Route exact path='/login' component={ConnectedLogin}/>
                </div>
            </div>
        )
    }
};
export default App;



