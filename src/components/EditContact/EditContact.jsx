import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { CgCloseO } from 'react-icons/cg';
import { useEffect } from 'react';

import { ContactSchema } from 'helpers/submitCheck';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  BtnForm,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
} from '../Forms/Forms.styled';
import { ButtonClose, Wrapper } from './EditContact.styled';

export function EditContact({
  contact: { name: savedName, number: savedNumber, id },
  handleClose,
}) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // add possibility closing by ESC
  useEffect(() => {
    const handleCloseESC = e => {
      if (e.code === 'Escape') handleClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleCloseESC);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleCloseESC);
    };
  }, [handleClose]);

  // closing by click on wrapper
  const onClose = e => {
    if (e.target === e.currentTarget) handleClose();
  };

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
    <Wrapper onClick={onClose}>
      <Formik
        initialValues={{ name: savedName, number: savedNumber }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <FormStyled name="editContact">
          <h3>
            Edit: <span>{savedName}</span>
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
          <BtnForm type="submit">Save contact</BtnForm>
          <ButtonClose type="button" onClick={() => handleClose()}>
            <CgCloseO size="2em" />
          </ButtonClose>
        </FormStyled>
      </Formik>
    </Wrapper>
  );
}
