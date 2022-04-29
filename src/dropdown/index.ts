import styled from '@emotion/styled';
import { Placement } from './Placement';

export * from './Toggle';

export const DropdownSelect = styled.ul<{
  isOpen: boolean;
  boundary: DOMRect | undefined;
  placement: Placement;
}>`
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  font-size: 1.5rem;
  transition: transform 200ms;
  transform: ${props => props.isOpen ? 'scaleY(1)' : 'scaleY(0)'};
  display: inline-block;
  position: absolute;

  ${props => {
    if (!props.boundary) {
      return '';
    }
    const b = props.boundary;
    switch (props.placement) {
      case Placement.BottomStart:
        return `
          top: ${b.top + b.height}px;
          left: ${b.left}px;
        `;
      case Placement.BottomCenter:
        return `
          top: ${b.top + b.height}px;
          left: ${b.left - b.width / 2}px;
        `;
      case Placement.BottomEnd:
        return `
          top: ${b.top + b.height}px;
          left: ${b.left - b.width}px;
        `;
    }
  }}
`;

export * from './Option';
