import { Formik, ErrorMessage, Field, Form } from 'formik';
import Spinner from 'react-spinner-material';
import { useDispatch, useSelector } from 'react-redux';
import { LoginSchema } from 'helpers/submitCheck';
import { logIn } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" placeholder="abc@email.com" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="at least 8 symbols"
          />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner radius={25} color={'#333'} stroke={3} visible={true} />
          ) : (
            'Log in'
          )}
        </button>
      </Form>
    </Formik>
  );
}
