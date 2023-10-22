import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const useContact = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    filter,
    contacts,
    error,
    isLoading,
    filteredContacts,
  };
};
