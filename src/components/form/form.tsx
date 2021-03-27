import * as React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction, deleteAction } from '../../actions/add.action';
import ListForm from '../listForm/list-form';

import { FormStyle, Button } from './styles';

const AddField = (props: any) => {
  const { onPush } = props;

  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />

      <button
        onClick={() => {
          onPush(value);
          setValue('');
        }}
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

const FormComponent = () => {
  const listData = useSelector((state: any) => state.add);

  const dispatch = useDispatch();

  return (
    <>
      <Form
        onSubmit={() => {}}
        mutators={{ ...arrayMutators }}
        initialValues={{
          tasks: listData,
        }}
      >
        {(formProps) => {
          const { handleSubmit } = formProps;

          return (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <FieldArray name="tasks">
                {({ fields }) => (
                  <div>
                    {fields.map((name, index) => (
                      <div
                        key={name}
                        style={{
                          padding: 12,
                        }}
                      >
                        <Field name={`${name}.name`} component="input" />
                        <button
                          onClick={() => {
                            dispatch(deleteAction(fields.value[index].id));
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}

                    <AddField
                      onPush={(value: string) => {
                        dispatch(
                          addAction({
                            id: uuidv4(),
                            name: value,
                          }),
                        );
                      }}
                    />
                  </div>
                )}
              </FieldArray>
            </form>
          );
        }}
      </Form>
    </>
  );
};

export default FormComponent;
