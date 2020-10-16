import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton, Avatar} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
             <div className="sidebar__header">
                 <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                          <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                           <ChatIcon />
                    </IconButton>     
                    <IconButton>
                           <MoreVertIcon />
                    </IconButton>                                    
                </div>      
            </div> 
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search or start new chat"/>
                </div>                                    
            </div> 
            <div className="sidebar__chats">
                    <SidebarChat />        
                    <SidebarChat />        
                    <SidebarChat />        
               </div>    
        </div>
    )
}

export default Sidebar
