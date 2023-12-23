import React, { ChangeEvent, useState } from 'react';
import { S } from './Dialogs.module';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Messages } from './Messages/Messages';
import { DialogsPageType } from '../../redux/state';

type DialogsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsType) => {

    let [message, setMessage] = useState('')

    const dialogsElements = props.dialogsPage.dialogs.map((user => <DialogsItem key={user.id} id={user.id} name={user.name}/>))

    const messagesElements = props.dialogsPage.messages.map((text) => <Messages key={text.id} id={text.id} messages={text.message}/>)


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }


    const onClickHandler =() => {
        alert(message)
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
                <input onChange={onChangeHandler} type="text" />
                <button onClick={onClickHandler}>Add Message</button>
            </div>
        </S.DialogsWrapper>
    );
};
