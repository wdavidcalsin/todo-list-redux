import * as React from 'react';
import { Form } from 'react-final-form';

import { FormStyle, Button, FieldStyle } from './styles';

const FormComponent = () => {
  return (
    <FormStyle>
      <FieldStyle type="text" placeholder="Duerme y despierta temprano" />
      <Button type="submit">Add </Button>
    </FormStyle>
  );
};

export default FormComponent;
