import styled from '@emotion/styled';
import { Placement } from './Placement';

export const DropdownSelect = styled.ul<{
  isOpen: boolean;
  toggleBoundary: DOMRect | undefined;
  selectBoundary: DOMRect | undefined;
  placement: Placement;
}>`
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  font-size: 1.5rem;
  transition: opacity 200ms;
  opacity: ${props => props.isOpen ? '1' : '0'};
  display: inline-block;
  position: absolute;

  ${props => {
    const { toggleBoundary: tb, selectBoundary: sb } = props;
    if (!(tb && sb)) {
      return '';
    }
    switch (Number(props.placement)) {
      case Placement.TopStart:
        return `
            top: ${tb.top - sb.height}px;
            left: ${tb.left}px;
          `;
      case Placement.TopCenter:
        return `
            top: ${tb.top - sb.height}px;
            left: ${tb.left - Math.abs(tb.width - sb.width) / 2}px;
          `;
      case Placement.TopEnd:
        return `
            top: ${tb.top - sb.height}px;
            left: ${tb.left + tb.width - sb.width}px;
          `;
      case Placement.RightStart:
        return `
            top: ${tb.top}px;
            left: ${tb.left + tb.width}px;
          `;
      case Placement.RightCenter:
        return `
            top: ${tb.top - Math.abs(tb.height - sb.height) / 2}px;
            left: ${tb.left + tb.width}px;
          `;
      case Placement.RightEnd:
        return `
            top: ${tb.top + tb.height - sb.height}px;
            left: ${tb.left + tb.width}px;
          `;
      case Placement.BottomStart:
        return `
            top: ${tb.top + tb.height}px;
            left: ${tb.left}px;
          `;
      case Placement.BottomCenter:
        return `
            top: ${tb.top + tb.height}px;
            left: ${tb.left - Math.abs(tb.width - sb.width) / 2}px;
          `;
      case Placement.BottomEnd:
        return `
            top: ${tb.top + tb.height}px;
            left: ${tb.left + tb.width - sb.width}px;
          `;
      case Placement.LeftStart:
        return `
            top: ${tb.top}px;
            left: ${tb.left - sb.width}px;
          `;
      case Placement.LeftCenter:
        return `
            top: ${tb.top - Math.abs(tb.height - sb.height) / 2}px;
            left: ${tb.left - sb.width}px;
          `;
      case Placement.LeftEnd:
        return `
            top: ${tb.top + tb.height - sb.height}px;
            left: ${tb.left - sb.width}px;
          `;
    }
  }}
`;
