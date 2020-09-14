import React from "react";
import { Field, Label, Control, Input, Help } from "react-bulma-components";

const LoginForm = () => {
  return (
    <div>
      <Field>
        <Label>Email</Label>
        <Control>
          <Input
            color="danger"
            type="email"
            placeholder="Email input"
            value="hello@"
          />
        </Control>
        <Help color="danger">This email is invalid</Help>
      </Field>
    </div>
  );
};

export default LoginForm;
