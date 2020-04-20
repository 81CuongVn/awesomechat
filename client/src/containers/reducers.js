import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import layout from "./AuthPage/reducer";
import auth from './AuthPage/reducer';
import contact from "./ContactPage/reducer";
import user from "./UserPage/reducer";
import message from "./ChatPage/reducer";
import call from './CallPage/reducer'
import socket from './socket/reducer'


export default (history) =>
    combineReducers({
        router: connectRouter(history),
        layout,
        auth,
        contact,
        user,
        message,
        call,
        socket,
    });
    
