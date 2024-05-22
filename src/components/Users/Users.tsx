import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { getUsersSuper, selectorIsFetching, selectorIsInited, selectorPageSize, selectorTotalCount } from '../../redux/users-selectors';

const Users = () => {

    let usersPage = useSelector<AppStateType, any>(getUsersSuper)
    let pageSize = useSelector<AppStateType, any>(selectorPageSize)
    let totalCount = useSelector<AppStateType, any>(selectorTotalCount)
    let isFetching = useSelector<AppStateType, any>(selectorIsFetching)
    let isInited = useSelector<AppStateType, any>(selectorIsInited)
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