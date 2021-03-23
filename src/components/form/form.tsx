import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction, deleteAction } from '../../actions/add.action';

import { FormStyle, Button, DivList } from './styles';

interface IValue {
  id: string;
  value: string;
}

const FormComponent = () => {
  const listData = useSelector((state: any) => state.add);
  const dispatch = useDispatch();

  const required = (value: any) => (value ? undefined : 'Required');

  const onSubmit = (values: any) => {
    const { value } = values;
    dispatch(addAction({ value: value, id: uuidv4() }));

    console.log(value);

    // if (Object.entries(valueInput).length !== 0) {
    //   dispatch(addAction(valueInput));

    //   dispatch(addAction(valueInput));

    // }

    // setValueInput({ value: '', id: '' });
  };

  const handleRemove = (id: any) => {
    dispatch(deleteAction(id));
  };

  const handleUpdate = (value: any, id: any) => {
    console.log(value, id);
  };

  return (
    <>
      {listData.map((val: any, key: any) => (
        <Form
          key={key}
          onSubmit={(value) => {
            handleUpdate(value, val.id);
          }}
          render={({ handleSubmit }) => (
            <FormStyle onSubmit={handleSubmit} key={key}>
              <Field
                name="valueUpdate"
                component="input"
                defaultValue={val.value}
              ></Field>
              <Button type="submit">Update</Button>
              <Button
                type="button"
                onClick={() => {
                  handleRemove(val.id);
                }}
              >
                Remove
              </Button>
            </FormStyle>
          )}
        />
      ))}

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <FormStyle
            onSubmit={async (event) => {
              handleSubmit(event);
              form.reset();
            }}
          >
            <Field name="value" validate={required}>
              {({ input, meta }) => (
                <>
                  <input
                    {...input}
                    type="text"
                    placeholder="Duerme y despierta temprano"
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
    </>
  );
};

export default FormComponent;
