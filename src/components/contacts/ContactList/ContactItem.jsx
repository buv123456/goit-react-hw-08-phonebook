import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CgTrashEmpty } from 'react-icons/cg';
import { TbUserEdit } from 'react-icons/tb';
import Spinner from 'react-spinner-material';
import { deleteContact } from 'redux/contacts/operations';
import { ButtonItemStyled, ItemInfoStyled } from '..';
import { createPortal } from 'react-dom';
import { EditContact } from 'components/EditContact/EditContact';

const modalRoot = document.querySelector('#modal-root');

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsLoading(true);
  };

  return (
    <>
      <ItemInfoStyled>
        <span>{name}:</span>
        <span> {number}</span>
      </ItemInfoStyled>
      <ButtonItemStyled
        type="button"
        name="edit"
        disabled={isLoading}
        onClick={() => {
          setIsEditing(true);
        }}
      >
        <TbUserEdit size="22px" />
      </ButtonItemStyled>
      <ButtonItemStyled
        type="button"
        name="delete"
        disabled={isLoading}
        onClick={handleDelete}
      >
        {isLoading ? (
          <Spinner radius={18} color={'#777'} stroke={4} visible={true} />
        ) : (
          <CgTrashEmpty size="22px" />
        )}
      </ButtonItemStyled>
      {isEditing &&
        createPortal(
          <EditContact
            name="editForm"
            contact={{ name, number, id }}
            handleClose={() => setIsEditing(false)}
          />,
          modalRoot
        )}
    </>
  );
}
