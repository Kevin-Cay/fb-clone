import React from 'react';
import './Login.css';
import {Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import {actionTypes } from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user ,
            })
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>
        </div>
    )
}

export default Login
