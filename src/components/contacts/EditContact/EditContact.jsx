import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { SignupSchema } from 'helpers/submitCheck';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  ButtonStyled,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
  LabelStyled,
} from '..';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff9f',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export function EditContact({
  contact: { name: savedName, number: savedNumber, id },
  handleClose,
}) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }) => {
    name = name.trim();
    number = number.trim();

    const checkContact = contacts.find(i => i.name === name);
    if (checkContact && checkContact.id !== id) {
      alert(name + ' is already in contacts list!');
    } else if (name === savedName && number === savedNumber) {
      handleClose();
    } else {
      dispatch(editContact({ name, number, id }));
      handleClose();
    }
  };
  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ name: savedName, number: savedNumber }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <FormStyled>
          <h2>Editing contact {savedName}</h2>
          <LabelStyled>
            Name
            <FieldStyled type="text" name="name" />
            <ErrorMsgStyled name="name" component="div" />
          </LabelStyled>
          <LabelStyled>
            Phone
            <FieldStyled type="tel" name="number" />
            <ErrorMsgStyled name="number" component="div" />
          </LabelStyled>
          <ButtonStyled type="submit">Edit contact</ButtonStyled>
          <button type="buttun" onClick={() => handleClose()}>
            X
          </button>
        </FormStyled>
      </Formik>
    </div>
  );
}
