import * as React from 'react';

import { FormStyle, Input, Button } from './styles';

const Form = () => {
  return (
    <FormStyle action="">
      <Input type="text" placeholder="Duerme y despierta temprano" />
      <Button type="submit">Add </Button>
    </FormStyle>
  );
};

export default Form;
