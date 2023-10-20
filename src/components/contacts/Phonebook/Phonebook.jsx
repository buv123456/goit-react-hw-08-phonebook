import { ContactList, Filter, PhonebookStyled } from '..';

export function Phonebook() {
  return (
    <PhonebookStyled>
      <Filter />
      <ContactList />
    </PhonebookStyled>
  );
}
