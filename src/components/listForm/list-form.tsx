import React from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteAction, updateAction, updateCheckAction } from '../../actions/add.action';
import { Button, FormStyle } from '../form/styles';

const ListForm = ({ val, defaultCheck }: any) => {
  const dispatch = useDispatch();

  const handleRemove = (id: any) => {
    dispatch(deleteAction(id));
    toast.warn('Eliminado de la Lista');
  };

  const handleUpdate = (values: any, id: any) => {
    const { valueUpdate, checkList } = values;
    const check = checkList === 'true';

    toast.success('Se actualizo la Lista', { autoClose: 3000 });
    dispatch(updateAction(id, valueUpdate, check));
  };

  const handleCheckbox = (v: any, id: string) => {
    if (v) {
      console.log(v);

      toast('Lista Seleccionada', { autoClose: 2000 });
      setTimeout(() => dispatch(updateCheckAction(id, true)), 1000);

      return 'true';
    }

    console.log(v);

    toast.info('Lista Deseleccionada', { autoClose: 2000 });
    setTimeout(() => dispatch(updateCheckAction(id, false)), 1000);

    return 'false';
  };

  return (
    <Form
      onSubmit={(values) => {
        handleUpdate(values, val.id);
      }}
      render={({ handleSubmit }) => (
        <FormStyle onSubmit={handleSubmit}>
          <Field
            name="checkList"
            component="input"
            type="checkbox"
            defaultValue={defaultCheck}
            className="input-check"
            format={(v) => v === 'true'}
            parse={(v) => handleCheckbox(v, val.id)}
          />
          <Field name="valueUpdate" component="input" defaultValue={val.value}></Field>
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
};

export default ListForm;
