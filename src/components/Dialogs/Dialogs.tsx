import React from 'react';
import { NavLink } from 'react-router-dom';
import { S } from './Dialogs.module';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Messages } from './Messages/Messages';

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Vasia'},
        {id: 5, name: 'Masha'},
    ]
    
    let messages = [
        {id: 1, message: 'Lorem ipsum dolor sit amet.'},
        {id: 2, message: 'Lorem ipsum dolor sit amet consectetur'},
        {id: 3, message: 'Lorem ipsum dolor sit amet consectetur'},
        {id: 4, message: 'Lorem ipsum dolor sit.'},
    ]

    const dialogsElements = dialogs.map((user => <DialogsItem key={user.id} id={user.id} name={user.name}/>))

    const messagesElements = messages.map((text) => <Messages key={text.id} id={text.id} messages={text.message}/>)

    return (
        <S.DialogsWrapper>
            <S.DialogsMembersList>
                <ul>
                    {dialogsElements}
                </ul>
            </S.DialogsMembersList>
            <S.DialogsMembersMessages>
                <div>
                    {messagesElements}
                </div>
            </S.DialogsMembersMessages>
        </S.DialogsWrapper>
    );
};
