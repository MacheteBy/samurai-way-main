import React from "react";
import { Field, InjectedFormProps } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import FormsControls from "../../common/FormsControls/FormsControls";


export type NewPostFormType = {
    message: string
}

const maxLength = maxLengthCreator(10)

const NewPostForm: React.FC<InjectedFormProps<NewPostFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Enter your message"}
        component={FormsControls}
        name={"message"}
        validate={[required, maxLength]}
      />
      <button>Send</button>
    </form>
  );
};

export default NewPostForm;
