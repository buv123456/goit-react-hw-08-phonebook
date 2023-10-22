import { ContactForm } from 'components/Forms/ContactForm';
import { Phonebook } from 'components/contacts';
import styled from 'styled-components';

const PhonebookWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default function Contacts() {
  return (
    <PhonebookWrap>
      <ContactForm />
      <Phonebook />
    </PhonebookWrap>
  );
}
