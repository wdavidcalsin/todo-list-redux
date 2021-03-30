import * as React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  addAction,
  deleteAction,
  updateAction,
  updateCheckAction,
} from '../../actions/add.action';
import { toast } from 'react-toastify';

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

  const handleCheckbox = (v: any, id: string) => {
    if (v) {
      toast('Lista Seleccionada', { autoClose: 2000 });
      setTimeout(() => dispatch(updateCheckAction(id, true)), 1000);

      return 'true';
    }

    toast.info('Lista Deseleccionada', { autoClose: 2000 });
    setTimeout(() => dispatch(updateCheckAction(id, false)), 1000);

    return 'false';
  };

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
                    {fields.map(
                      (name, index) =>
                        !fields.value[index].check && (
                          <div
                            key={name}
                            style={{
                              padding: 12,
                            }}
                          >
                            <Field
                              name={`${name}.check`}
                              component="input"
                              type="checkbox"
                              value="spring"
                              format={(v) => v === 'true'}
                              parse={(v) => handleCheckbox(v, fields.value[index].id)}
                            />
                            <Field
                              name={`${name}.name`}
                              defaultValue={fields.value[index].name}
                              component="input"
                            />
                            <button
                              onClick={() => {
                                dispatch(deleteAction(fields.value[index].id));
                              }}
                            >
                              Remove
                            </button>
                            <button
                              onClick={() => {
                                const { id, name, check } = fields.value[index];
                                dispatch(updateAction(id, name, check));
                              }}
                            >
                              Update
                            </button>
                          </div>
                        ),
                    )}

                    <AddField
                      onPush={(value: string) => {
                        dispatch(addAction({ id: uuidv4(), name: value, check: false }));
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
