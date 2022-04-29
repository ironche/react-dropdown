import styled from '@emotion/styled';

export const DropdownToggle = styled.button`
  background-color: ${props => props.theme.colors.black500};
  color: ${props => props.theme.colors.white100};
  border-width: 0;
  cursor: pointer;
  user-select: none;
  transition: background-color 200ms;

  &:active {
    background-color: ${props => props.theme.colors.black100};
  }
`;
