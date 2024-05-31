// src/Dialogs.js
import React from 'react';
import DialogItem from './DialogItem';

const Dialogs = () => {
  const dialogData = [
    { id: '1', name: 'Настя', message: 'Привет, как дела?' },
    { id: '2', name: 'Руслан', message: 'верни косарь бро' },
  ];

  return (
    <div>
      {dialogData.map(dialog => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} message={dialog.message} />
      ))}
    </div>
  );
}

export default Dialogs;
