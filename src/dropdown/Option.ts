import styled from '@emotion/styled';

export const DropdownOption = styled.li`
  background-color: ${props => props.theme.colors.black500};
  color: ${props => props.theme.colors.white100};
  cursor: pointer;
  padding: 1rem;

  &:hover {
    background-color: ${props => props.theme.colors.blue200};
  }
`;
