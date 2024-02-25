import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppStateType } from '../../redux/redux-store';
import User from './User/User';

const Users = () => {

    let usersPage = useSelector<AppStateType, any>(state => state.usersPage)
    let dispatch = useDispatch()
    return (
        <>
        <User postPage={usersPage} dispatch={dispatch}/>
        </>
    );
};

export default Users;

