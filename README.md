# React Dropdown

Before starting, make sure to have NodeJS and NPM installed. Install all dependencies and start the app by executing:

```shell
npm install
npm start
```

Then, open the `http://localhost:3000/` address in browser.

## Code usage

Main components of the dropdown are:
- `DropdownToggle` button used to open/close the options list,
- `DropdownSelect` list that holds all menu items and configuration that sets its placement relative to the `DropdownToggle` button
- `DropdownOption` clickable item that can be used for navigation or for triggering actions 

```javascript
function Demo() {
  const [open, setOpen] = useState<boolean>(false);
  const [toggleBoundary, toggleRef] = useBoundingRect();
  const [selectBoundary, selectRef] = useBoundingRect();

  useClickOutside(toggleRef, () => setOpen(false));

  return (
    <DropdownToggle
      ref={toggleRef as any}
      onClick={() => setOpen(!open)}
    >
      <MoreIcon size={48}/>
    </DropdownToggle>

    <DropdownSelect
      ref={selectRef as any}
      isOpen={open}
      toggleBoundary={toggleBoundary}
      selectBoundary={selectBoundary}
      placement={Placement.BottomStart}
    >
      <DropdownOption onClick={() => console.log('rename')}>
        Rename task
      </DropdownOption>
      <DropdownOption onClick={() => console.log('delete')}>
        Delete task
      </DropdownOption>
      <DropdownOption onClick={() => console.log('share')}>
        Share with friends
      </DropdownOption>
    </DropdownSelect>
  );
}
```

## Placement

Placement is defined in [Placement](./src/dropdown/Placement.ts) enum that holds 12 variants.

```javascript

               TopStart       TopCenter        TopEnd
           _______________|_______________|_______________
LeftStart |                                               | RightStart
LeftCenter|                                               | RightCenter
LeftEnd   |_______________|_______________|_______________| RightEnd
             BottomStart     BottomCenter     BottomEnd
```

## Dropdown actions

`DropdownOption` accepts `onClick={...}` function that can be used either for navigation by calling `window.location` or configuring `react-router` plugin.

## Cross browser compatibility

Dropdown works with both touch and mouse events. Clicking/touching outside the `DropdownToggle` is handled by [useClickOutside](./src/hooks/click-outside.ts) hook. Window resize handlers are provided in [useBoundingRect](./src/hooks/bounding-rect.ts) hook.

## Theme

See [Theme](./src/theme/index.ts) interface.
