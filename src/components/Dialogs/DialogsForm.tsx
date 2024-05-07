import React from "react";
import { Field, InjectedFormProps } from "redux-form";

export type DialogsFormType = {
    message: string
}

const DialogsForm: React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={"message"} component={"input"} name={"message"} />
      <button>Add</button>
    </form>
  );
};


export default DialogsForm;
