import { CheckBoxStyled, CheckStyled, LabelListStyled } from '..';

export const SortBox = ({ onCheck, sortBy }) => {
  return (
    <CheckBoxStyled>
      <span>sort by</span>
      <CheckStyled>
        <LabelListStyled>
          name
          <input
            type="radio"
            value="name"
            checked={sortBy === 'name'}
            onChange={e => onCheck(e.target.value)}
          />
        </LabelListStyled>
        <LabelListStyled>
          phone
          <input
            type="radio"
            value="number"
            checked={sortBy === 'number'}
            onChange={e => onCheck(e.target.value)}
          />
        </LabelListStyled>
      </CheckStyled>
    </CheckBoxStyled>
  );
};
