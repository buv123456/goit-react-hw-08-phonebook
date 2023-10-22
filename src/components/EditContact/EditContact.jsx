import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { SignupSchema } from 'helpers/submitCheck';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  BtnForm,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
} from '../Forms/Forms.styled';
import { ButtonClose, Wrapper } from './EditContact.styled';
import { CgCloseO } from 'react-icons/cg';

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
    <Wrapper>
      <Formik
        initialValues={{ name: savedName, number: savedNumber }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <FormStyled name="editContact">
          <h3>
            Editing contact: <span>{savedName}</span>
          </h3>

          <label>
            Name
            <FieldStyled type="text" name="name" />
            <ErrorMsgStyled name="name" component="div" />
          </label>
          <label>
            Phone
            <FieldStyled type="tel" name="number" />
            <ErrorMsgStyled name="number" component="div" />
          </label>
          <BtnForm type="submit">Edit contact</BtnForm>
          <ButtonClose type="button" onClick={() => handleClose()}>
            <CgCloseO size="2em" />
          </ButtonClose>
        </FormStyled>
      </Formik>
    </Wrapper>
  );
}
