import { ErrorMessage, Field, Form, Formik } from "formik";

export const News = () => {

    const onClickHandler = (data: any) => {
        console.log(data)
    }

    return (
        <div>
                <h1>Any place in your app!</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => onClickHandler(values)}
                >
                        <Form>
                            <Field type="text" name="email" />
                            <Field type="text" name="password" />
                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    
                </Formik>
            </div>
            );
};
