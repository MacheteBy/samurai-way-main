import React from 'react';
import { NavLink } from 'react-router-dom';
import { S } from './Dialogs.module';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Messages } from './Messages/Messages';
import {PropsType} from './../../App';
import { RootStateType } from '../../redux/state';






export const Dialogs = (props:RootStateType) => {

    const dialogsElements = props.dialogsPage.dialogs.map((user => <DialogsItem key={user.id} id={user.id} name={user.name}/>))

    const messagesElements = props.dialogsPage.messages.map((text) => <Messages key={text.id} id={text.id} messages={text.message}/>)


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
