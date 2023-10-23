import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import sorting from 'helpers/sorting';
import {
  AllContactsStyled,
  ListItemStyled,
  ListStyled,
  SortBox,
  ContactItem,
} from '..';
import { useContact } from 'hooks/useContact';
import { fetchContacts } from 'redux/contacts/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const { contacts, filteredContacts } = useContact();
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
        {contacts.length} all contacts <br />
        {filteredContacts.length} filtered contacts
      </AllContactsStyled>
      <SortBox onCheck={handleCheck} sortBy={sortBy} />
      <ListStyled>
        {sorting(filteredContacts, sortBy).map(({ name, number, id }) => (
          <ListItemStyled key={id}>
            <ContactItem name={name} number={number} id={id} />
          </ListItemStyled>
        ))}
      </ListStyled>
    </>
  );
}
