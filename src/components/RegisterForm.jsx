import { Formik, ErrorMessage, Field, Form } from 'formik';
import Spinner from 'react-spinner-material';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterSchema } from 'helpers/submitCheck';
import { register } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    console.log(name, email, password);
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Email
          <Field type="email" name="email" placeholder="abc@email.com" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner radius={25} color={'#333'} stroke={3} visible={true} />
          ) : (
            'Register'
          )}
        </button>
      </Form>
    </Formik>
  );
}
