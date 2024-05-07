import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} name='login'>
            <div><Field placeholder={'Login'} component={'input'} name={'login'}/></div>
            <div><Field placeholder={'Password'} component={'input'} name={'password'}/></div>
            <div><Field type={'checkbox'} component={'input'} name={'rememberMe'}/>remember me</div>
            <button>Login</button>
        </form>
    );
};

export default LoginForm;