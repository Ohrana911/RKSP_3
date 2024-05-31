// src/DialogItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DialogItem.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialog-item">
      <Link to={path} className="dialog-link">
        <div className="dialog-name">{props.name}</div>
        <div className="dialog-message">{props.message}</div>
      </Link>
    </div>
  );
}

export default DialogItem;
