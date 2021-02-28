import * as React from 'react';
import { Form, Field } from 'react-final-form';

import { FormStyle, Button } from './styles';

const FormComponent = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {(formProps) => {
        return (
          <FormStyle onSubmit={formProps.handleSubmit}>
            <Field
              component="input"
              name="value"
              type="text"
              placeholder="Duerme y despierta temprano"
            />
            <Button type="submit">Add </Button>
          </FormStyle>
        );
      }}
    </Form>
  );
};

export default FormComponent;
