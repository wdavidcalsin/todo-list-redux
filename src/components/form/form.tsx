import * as React from 'react';
import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../../actions/add.action';

import { FormStyle, Button } from './styles';

interface IValue {
  id: string;
  value: string;
}

const FormComponent = () => {
  const [valueInput, setValueInput] = useState<IValue>({} as IValue);

  const todos = useSelector((state: any) => state.add);
  const dispatch = useDispatch();

  const required = (value: any) => (value ? undefined : 'Required');

  const onSubmit = (values: any) => {
    const { value } = values;
    const endValue = { id: uuidv4(), value };

    setValueInput(endValue);
    console.log(valueInput);

    // if (Object.entries(valueInput).length !== 0) {
    //   dispatch(addAction(valueInput));

    //   dispatch(addAction(valueInput));

    // }

    // setValueInput({ value: '', id: '' });
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <FormStyle onSubmit={handleSubmit}>
            <Field name="value" validate={required}>
              {({ input, meta }) => (
                <>
                  <input
                    {...input}
                    type="text"
                    placeholder="Duerme y despierta temprano"
                    // value={valueInput.value || ''}
                  />
                  {meta.error && meta.touched && (
                    <span style={{ color: 'red' }}>{meta.error}</span>
                  )}
                </>
              )}
            </Field>
            {/* disabled={submitting || pristine} */}
            <Button type="submit">Add</Button>
          </FormStyle>
        )}
      />
      <ul>
        {todos.map((val: any, key: any) => (
          <li key={key}>{val.value}</li>
        ))}
      </ul>
    </>
  );
};

export default FormComponent;
