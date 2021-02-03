import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Some description" />
            </ListItem>
        </List>
        
    )
}

export default Todo
