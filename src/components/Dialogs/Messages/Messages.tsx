import React from 'react';

type MessagesType = {
    id: number,
    messages: string,
}


export const Messages = (props: MessagesType) => {
    const {messages, id} = props
    return (
        <div>
            <p>{messages}</p>
        </div>
    );
};
