import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';

const Users = () => {

    let usersPage = useSelector<AppStateType, any>(state => state.usersPage.users)
    let pageSize = useSelector<AppStateType, any>(state => state.usersPage.pageSize)
    let totalCount = useSelector<AppStateType, any>(state => state.usersPage.totalCount)
    let isFetching = useSelector<AppStateType, any>(state => state.usersPage.isFetching)
    let isInited = useSelector<AppStateType, any>(state => state.auth.isInited)
    let dispatch = useDispatch()

    if(isInited === false) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            {isFetching && <Preloader/>}
            <User usersPage={usersPage}
                dispatch={dispatch}
                pageSize={pageSize}
                totalCount={totalCount}/>
        </>
    );
};

export default Users;