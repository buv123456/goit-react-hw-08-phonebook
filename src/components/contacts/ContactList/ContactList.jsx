import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import sorting from 'helpers/sorting';
import {
  AllContactsStyled,
  ListItemStyled,
  ListStyled,
  SortBox,
  ContactItem,
} from '..';
import { fetchContacts } from 'redux/contacts/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const contactsAll = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleCheck = value => {
    setSortBy(value);
  };

  return (
    <>
      <AllContactsStyled>
        {contactsAll.length} all contacts <br />
        {contacts.length} filtered contacts
      </AllContactsStyled>
      <SortBox onCheck={handleCheck} sortBy={sortBy} />
      <ListStyled>
        {sorting(contacts, sortBy).map(({ name, number, id }) => (
          <ListItemStyled key={id}>
            <ContactItem name={name} number={number} id={id} />
          </ListItemStyled>
        ))}
      </ListStyled>
    </>
  );
}
