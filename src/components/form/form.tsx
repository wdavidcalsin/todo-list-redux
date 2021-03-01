import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { v4 as uuidv4 } from 'uuid';

import { FormStyle, Button } from './styles';

const FormComponent = () => {
  const required = (value: any) => (value ? undefined : 'Required');

  const onSubmit = (values: any) => {
    const { value } = values;
    const endValue = { id: uuidv4(), value };
    console.log(endValue);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <FormStyle onSubmit={handleSubmit}>
          <Field name="value" validate={required}>
            {({ input, meta }) => (
              <>
                <input {...input} type="text" placeholder="Duerme y despierta temprano" />
                {meta.error && meta.touched && (
                  <span style={{ color: 'red' }}>{meta.error}</span>
                )}
              </>
            )}
          </Field>

          <Button type="submit" disabled={submitting || pristine}>
            Add
          </Button>
        </FormStyle>
      )}
    />
  );
};

export default FormComponent;
