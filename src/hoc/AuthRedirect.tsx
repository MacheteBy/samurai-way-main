import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../redux/redux-store';
import { Redirect } from 'react-router-dom';

export const AuthRedirect = (Component: any) => {
    let isInited = useSelector<AppStateType, any>(state => state.auth.isInited)
    class RedirectComponent extends React.Component {
        render() {
            if (isInited === false) {
                return <Redirect to='/login' />
            }
            return <Component {...this.props} />
        }
    }
    return RedirectComponent
}