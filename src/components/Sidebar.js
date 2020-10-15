import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import IconButton from '@material-ui/core/IconButton';


function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Im a sidebar</h1>
             <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <IconButton>
                          <DonutLargeIcon />
                    </IconButton>
                    
                    <IconButton>
                           <ChatIcon />
                    </IconButton>
                    
                    
                </div>      
            </div>  
        </div>
    )
}

export default Sidebar
