import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useId } from 'react';

import css from './RegistrationForm.module.css';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
const initialValues = {
  name: '',
  email: '',
  password: '',
};

const CheckShema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too short')
    .max(50, 'Too long')
    .required('Required name'),
  email: Yup.string().email('Pls valid email').required('Required email'),
  password: Yup.string().min(6, 'Too short').max(50, 'Too long'),
});

export const RegisterForm = () => {
  const idName = useId();
  const idEmail = useId();
  const idPassword = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      <h2 className={css.title}>Create account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CheckShema}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={idName} className={css.label}>
              Name
            </label>
            <Field type="text" name="name" id={idName} className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.field}>
            <label htmlFor={idEmail} className={css.label}>
              Email
            </label>
            <Field
              type="text"
              name="email"
              id={idEmail}
              className={css.input}
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>

          <div className={css.field}>
            <label htmlFor={idPassword} className={css.label}>
              Password
            </label>
            <Field
              type="text"
              name="password"
              id={idPassword}
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.btn}>
            Sign up
          </button>
        </Form>
      </Formik>
    </>
  );
};
