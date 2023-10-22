import styled from 'styled-components';

export const PhonebookStyled = styled.div`
  width: 600px;
  max-height: 420px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 10px;
  box-shadow: inset 0 0 30px teal, 3px 3px 10px black;
`;
