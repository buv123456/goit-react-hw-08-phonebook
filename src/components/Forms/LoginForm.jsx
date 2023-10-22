import { Formik } from 'formik';
import Spinner from 'react-spinner-material';
import { useDispatch } from 'react-redux';
import { LoginSchema } from 'helpers/submitCheck';
import { logIn } from 'redux/auth/operations';
import {
  BtnForm,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
} from './Forms.styled';
import { useAuth } from 'hooks/useAuth';

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

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
      <FormStyled name="login">
        <label>
          Email
          <FieldStyled type="email" name="email" placeholder="abc@email.com" />
          <ErrorMsgStyled name="email" component="div" />
        </label>
        <label>
          Password
          <FieldStyled
            type="password"
            name="password"
            placeholder="at least 8 symbols"
          />
          <ErrorMsgStyled name="password" component="div" />
        </label>
        <BtnForm type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner radius={25} color={'#333'} stroke={3} visible={true} />
          ) : (
            'Log in'
          )}
        </BtnForm>
      </FormStyled>
    </Formik>
  );
}
