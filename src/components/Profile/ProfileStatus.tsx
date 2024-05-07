import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatusTC } from '../../redux/profile-reducer';

type ProfileStatusType = {
    status: string
}

const ProfileStatus = (props: ProfileStatusType) => {
    const dispatch = useDispatch()
    const [state, setState] = useState(false);
    const [status, setStatus] = useState(props.status);

    const onClickHandler = () => {
        setState(!state)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onBlureHandler = () => {
        dispatch(updateStatusTC(status))
    }

    return (
        <div>
            {state 
            ? <input type="text" onDoubleClick={onClickHandler} onChange={onChangeHandler} onBlur={onBlureHandler} value={status}/> 
            : <span onDoubleClick={onClickHandler}>{status}</span>}
        </div>
    );
};

export default ProfileStatus;