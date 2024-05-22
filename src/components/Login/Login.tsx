import LoginForm, { FormDataType } from './LoginForm';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { setLoginTC } from '../../redux/auth-reducer';

const Login = () => {

    const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)
    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
        dispatch(setLoginTC(formData))
    } 

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;