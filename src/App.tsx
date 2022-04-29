import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme';
import ToggleButton from './dropdown/toggle-button.png';
import { DropdownOption, DropdownSelect, DropdownToggle, MoreIcon, Placement, placementIds } from 'dropdown';
import { useClickOutside, useBoundingRect } from 'hooks';
import styled from '@emotion/styled';

export default function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<Placement>(Placement.BottomStart);
  const [toggleBoundary, toggleRef] = useBoundingRect();
  const [selectBoundary, selectRef] = useBoundingRect();

  useClickOutside(toggleRef, () => setOpen(false));

  function handleChange(event: any): void {
    setPlacement(event.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <p>
        Usage: Click on <img width={24} src={ToggleButton} alt="toggle button image" /> button to toggle dropdown visibility.
      </p>
      <p>
        Hint: Change dropdown menu placement here: &nbsp;
        <select onChange={handleChange} value={placement}>
          {placementIds.map(id =>
            <option key={id} value={id}>
              {Placement[id]}
            </option>
          )}
        </select>
      </p>

      <CenteredToggleButton
        ref={toggleRef as any}
        onClick={() => setOpen(!open)}
      >
        <MoreIcon size={48}/>
      </CenteredToggleButton>

      <DropdownSelect
        ref={selectRef as any}
        isOpen={open}
        toggleBoundary={toggleBoundary}
        selectBoundary={selectBoundary}
        placement={placement}
      >
        <DropdownOption onClick={() => console.log('rename')}>Rename task</DropdownOption>
        <DropdownOption onClick={() => console.log('delete')}>Delete task</DropdownOption>
        <DropdownOption onClick={() => console.log('share')}>Share with friends</DropdownOption>
      </DropdownSelect>

    </ThemeProvider>
  );
}

const CenteredToggleButton = styled(DropdownToggle)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-45%, -45%);
`;
