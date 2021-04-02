import * as React from 'react';
// import { Form, Field } from 'react-final-form';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../../actions/add.action';
import ListForm from '../listForm/list-form';

import { FormStyle, Button } from './styles';

import * as Yup from 'yup';

const ValueSchema = Yup.object().shape({
  value: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
});

interface MyFormValues {
  value: string;
}

interface IPropValue {
  value: string;
  id: string;
  check: boolean;
}

const FormComponent = () => {
  const listData = useSelector((state: any) => state.add);
  const dispatch = useDispatch();

  const initialValues: MyFormValues = { value: '' };

  const onSubmit = (values: any, action: any) => {
    const { value } = values;
    dispatch(addAction({ value: value, id: uuidv4(), check: false }));

    action.resetForm();
  };

  return (
    <>
      {listData.map((valItem: IPropValue, key: any) => {
        if (!valItem.check) {
          return <ListForm valItem={valItem} key={key} />;
        }

        return undefined;
      })}

      <Formik
        initialValues={initialValues}
        onSubmit={(value, action) => onSubmit(value, action)}
        validationSchema={ValueSchema}
        render={({ handleSubmit, errors, touched }) => (
          <FormStyle onSubmit={handleSubmit}>
            <Field name="value" placeholder="Duerme y despierta temprano" />

            {errors.value && touched.value ? (
              <div style={{ color: 'red' }}>{errors.value}</div>
            ) : null}

            <Button type="submit">Add</Button>
          </FormStyle>
        )}
      />

      {/* <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
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
            <Button type="submit">Add</Button>
          </FormStyle>
        )}
      /> */}
    </>
  );
};

export default FormComponent;
