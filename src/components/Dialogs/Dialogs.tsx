import React, { ChangeEvent, useState } from 'react';
import { S } from './Dialogs.module';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Messages } from './Messages/Messages';
import { DialogsPageType, dispatchType } from '../../redux/state';
import { AddMessageActionCreator } from '../../redux/dialogs-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

// type DialogsType = {
//     dialogsPage: DialogsPageType
//     dispatch: (action: dispatchType) => void;
// }

type DialogsType = {
    id: number 
    name: string
}

type MessagesType = {
    id: number 
    message: string
}


export const Dialogs = () => {

    let [message, setMessage] = useState('')
    let dialogsPage = useSelector<AppStateType, any>(state => state.dialogsPage)
    let dispatch = useDispatch()

    const dialogsElements = dialogsPage.dialogs.map(((user: DialogsType) => <DialogsItem key={user.id} id={user.id} name={user.name}/>))

    const messagesElements = dialogsPage.messages.map((text: MessagesType) => <Messages key={text.id} id={text.id} messages={text.message}/>)


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }


    const onClickHandler =() => {
        dispatch(AddMessageActionCreator(message))
        setMessage('')
    }

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
            <div>
                <input value={message} onChange={onChangeHandler} type="text" />
                <button onClick={onClickHandler}>Add Message</button>
            </div>
        </S.DialogsWrapper>
    );
};
