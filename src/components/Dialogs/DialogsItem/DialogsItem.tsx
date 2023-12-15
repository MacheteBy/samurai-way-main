import React from 'react';
import { NavLink } from 'react-router-dom';

type DialogsItemType = {
    id: number,
    name: string,
}


export const DialogsItem = (props: DialogsItemType) => {
    const {id, name} = props
    let urlMessages = '/messages/' + id
    return (
        <div>
            <li><NavLink to={urlMessages} activeClassName={'active'}>{name}</NavLink></li>
        </div>
    );
};
