import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useStateValue} from './StateProvider'


function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                <div className="header_input">
                <SearchIcon />
                <input type="text" placeholder="Buscar en facebook" />
                </div>
            </div>
            
            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon frontSize="large" />
                </div>
                <div className="header_option ">
                    <FlagIcon frontSize="large" />
                </div>
                <div className="header_option ">
                    <SubscriptionsIcon frontSize="large" />
                </div>
                <div className="header_option ">
                    <StorefrontIcon frontSize="large" />
                </div>
                <div className="header_option ">
                    <SupervisorAccountIcon frontSize="large" />
                </div>
            </div>
            <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
            <div className="header_right">
                
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>  
        </div>
    )
}

export default Header
