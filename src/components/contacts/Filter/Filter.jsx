import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { FilterStyled } from '..';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterStyled
      type="text"
      name="filter"
      onChange={e => dispatch(changeFilter(e.target.value))}
      value={filter}
      placeholder="add filter..."
    />
  );
}
