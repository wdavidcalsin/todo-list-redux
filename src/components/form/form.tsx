import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../../actions/add.action';
import ListForm from '../listForm/list-form';

import { FormStyle, Button } from './styles';

const FormComponent = () => {
  const listData = useSelector((state: any) => state.add);

  console.log({ listData });

  const dispatch = useDispatch();

  const required = (value: any) => (value ? undefined : 'Required');

  const onSubmit = (values: any) => {
    const { value } = values;
    dispatch(addAction({ value: value, id: uuidv4(), check: false }));

    console.log(value);
  };

  return (
    <>
      {listData.map((listItem: any, key: any) => {
        if (listItem.check !== true) {
          return <ListForm val={listItem} key={key} defaultCheck="false" />;
        }

        return undefined;
      })}

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
