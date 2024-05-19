import React, { ChangeEvent, useState } from 'react';
import { S } from './Dialogs.module';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Messages } from './Messages/Messages';
import { DialogsPageType, dispatchType } from '../../redux/state';
import { AddMessageActionCreator } from '../../redux/dialogs-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';
import DialogsForm, { DialogsFormType } from './DialogsForm';
import { reduxForm } from 'redux-form';
import { selectorDialogsPage, selectorIsInited } from '../../redux/dialogs-selector';

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

    // let [message, setMessage] = useState('')
    let dialogsPage = useSelector<AppStateType, any>(selectorDialogsPage)
    let isInited = useSelector<AppStateType, any>(selectorIsInited)
    let dispatch = useDispatch()

    const dialogsElements = dialogsPage.dialogs.map(((user: DialogsType) => <DialogsItem key={user.id} id={user.id} name={user.name}/>))

    const messagesElements = dialogsPage.messages.map((text: MessagesType) => <Messages key={text.id} id={text.id} messages={text.message}/>)


    // const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setMessage(e.currentTarget.value)
    // }


    // const onClickHandler =() => {
    //     dispatch(AddMessageActionCreator(message))
    //     setMessage('')
    // }

    if(isInited === false) {
        return <Redirect to={'/login'}/>
    }

    const DialogReduxForm = reduxForm<DialogsFormType>({form: 'message'})(DialogsForm)

    const onSubmit = (formData: DialogsFormType) => {
        console.log(formData)
        dispatch(AddMessageActionCreator(formData.message))

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
            <DialogReduxForm onSubmit={onSubmit}/>
        </S.DialogsWrapper>
    );
};
