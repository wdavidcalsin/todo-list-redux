import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteAction, updateAction, updateCheckAction } from '../../actions/add.action';
import { Button, FormStyle } from '../form/styles';

const ListForm = ({ valItem }: any) => {
  const dispatch = useDispatch();

  const handleRemove = (id: any) => {
    dispatch(deleteAction(id));
    toast.warn('Eliminado de la Lista');
  };

  const handleUpdate = (values: any, id: any) => {
    const { valueUpdate, checkList } = values;

    toast.success('Se actualizo la Lista', { autoClose: 3000 });
    dispatch(updateAction(id, valueUpdate, checkList));
  };

  const handleCheckbox = (v: any, id: string) => {
    if (v) {
      toast('Lista Seleccionada', { autoClose: 2000 });

      setTimeout(() => dispatch(updateCheckAction(id, true)), 1000);
    } else {
      toast.info('Lista Deseleccionada', { autoClose: 2000 });

      setTimeout(() => dispatch(updateCheckAction(id, false)), 1000);
    }
  };

  return (
    <Formik
      initialValues={{
        checkList: valItem.check,
        valueUpdate: valItem.value,
      }}
      onSubmit={(values) => {
        handleUpdate(values, valItem.id);
      }}
    >
      {({ handleSubmit, values }) => (
        <FormStyle onSubmit={handleSubmit}>
          <Field name="checkList">
            {({ field }: FieldProps) => (
              <input
                {...field}
                type="checkbox"
                className="input-check"
                defaultChecked={valItem.check}
                onClick={() => handleCheckbox(!values.checkList, valItem.id)}
              />
            )}
          </Field>
          <Field name="valueUpdate">
            {({ field }: FieldProps) => <input {...field} type="text" />}
          </Field>

          <Button type="submit">Update</Button>
          <Button
            type="button"
            onClick={() => {
              handleRemove(valItem.id);
            }}
          >
            Remove
          </Button>
        </FormStyle>
      )}
    </Formik>
  );
};

export default ListForm;
