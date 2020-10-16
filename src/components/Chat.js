import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'
import './Chat.css';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
                          <SearchOutlined />
                    </IconButton>
                    <IconButton>
                           <AttachFile />
                    </IconButton>     
                    <IconButton>
                           <MoreVertIcon />
                    </IconButton>         
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Chat
