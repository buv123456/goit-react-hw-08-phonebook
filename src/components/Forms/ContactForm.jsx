import { Formik } from 'formik';
import Spinner from 'react-spinner-material';
import { useDispatch } from 'react-redux';
import { ContactSchema } from 'helpers/submitCheck';
import { addContact } from 'redux/contacts/operations';
import {
  BtnForm,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
} from './Forms.styled';
import { useContact } from 'hooks/useContact';

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm() {
  const dispatch = useDispatch();
  const { isLoading, contacts } = useContact();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    name = name.trim();
    number = number.trim();

    if (
      contacts.some(
        ({ name: savedName }) => savedName.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(name + ' is already in contacts list!');
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <FormStyled name="contact">
        <label>
          Name
          <FieldStyled
            type="text"
            name="name"
            placeholder="Charles de Castelmore d'Artagnan"
          />
          <ErrorMsgStyled name="name" component="div" />
        </label>
        <label>
          Phone
          <FieldStyled type="tel" name="number" placeholder="Phone" />
          <ErrorMsgStyled name="number" component="div" />
        </label>
        <BtnForm type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner radius={25} color={'#333'} stroke={3} visible={true} />
          ) : (
            'Add contact'
          )}
        </BtnForm>
      </FormStyled>
    </Formik>
  );
}
