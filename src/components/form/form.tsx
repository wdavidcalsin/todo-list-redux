import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  addAction,
  deleteAction,
  updateAction,
  updateCheckAction,
} from '../../actions/add.action';

import { FormStyle, Button } from './styles';

const FormComponent = () => {
  const listData = useSelector((state: any) => state.add);
  const dispatch = useDispatch();

  const required = (value: any) => (value ? undefined : 'Required');

  const onSubmit = (values: any) => {
    const { value } = values;
    dispatch(addAction({ value: value, id: uuidv4(), check: false }));

    console.log(value);
  };

  const handleRemove = (id: any) => {
    dispatch(deleteAction(id));
  };

  const handleUpdate = (values: any, id: any) => {
    const { valueUpdate, checkList } = values;
    const check = checkList === 'true';

    dispatch(updateAction(id, valueUpdate, check));
  };

  const handleCheckbox = (v: any, id: string) => {
    if (v) {
      console.log(v);
      setTimeout(() => dispatch(updateCheckAction(id, true)), 2000);

      return 'true';
    }

    console.log(v);
    setTimeout(() => dispatch(updateCheckAction(id, false)), 2000);

    return 'false';
  };

  return (
    <>
      {listData.map((val: any, key: any) => {
        if (val.check !== true) {
          return (
            <Form
              key={key}
              onSubmit={(values) => {
                handleUpdate(values, val.id);
              }}
              render={({ handleSubmit }) => (
                <FormStyle onSubmit={handleSubmit} key={key}>
                  <Field
                    name="checkList"
                    component="input"
                    type="checkbox"
                    defaultValue="false"
                    className="input-check"
                    format={(v) => v === 'true'}
                    parse={(v) => handleCheckbox(v, val.id)}
                  />
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
          );
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
