import { Formik } from 'formik';
import Spinner from 'react-spinner-material';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterSchema } from 'helpers/submitCheck';
import { register } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import {
  BtnForm,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
} from 'components/Forms/Forms.styled';

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
      <FormStyled name="register">
        <label>
          Name
          <FieldStyled type="text" name="name" placeholder="Enter your name" />
          <ErrorMsgStyled name="name" component="div" />
        </label>
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
            placeholder="minimum 8 symbols"
          />
          <ErrorMsgStyled name="password" component="div" />
        </label>
        <BtnForm type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner radius={25} color={'#333'} stroke={3} visible={true} />
          ) : (
            'Register'
          )}
        </BtnForm>
      </FormStyled>
    </Formik>
  );
}
