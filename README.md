# Simple Yummy Modal Library (TS)

This is a reusable react modal library. You can change the direction of the modal animation(slide) and design the modal.

<br>
<br>

## Getting started

### ✅ 1. Install this library.

**npm**

```
npm i simple-yummy-modal
```

**yarn**

```
yarn add simple-yummy-modal
```

### ✅ 2. Import this library into your file.

```tsx
import { Modal } from 'simple-yummy-modal';
```

### ✅ 3. Use it like this!

```tsx
// Example.tsx

const Example = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [initialState, setInitialState] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setInitialState(true);
  };

  <Button onClick={handleButtonClick}>
    Trigger Button
  </Button>

  <Modal
    openTrigger={setIsClicked}
    isTriggered={isClicked}
    initialState={initialState}
    modalStyle={modalStyle} // CSSProp
    direction='center'
    backdropColor='rgba(0, 0, 0, 0.4)'
    buttonContent='X'
    modalButtonStyle={buttonStyle} // CSSProp
  >
    {/* Modal Contents (ReactNode) */}
  </Modal>;
};
```

<br>

## ⭐ Props

### initialState (boolean)

It's modal's initial state. If it is `false`, you can't see this modal until before clicking the trigger button.

<br>

### modalStyle (CSSProp)

You can design the modal.

> Example

```ts
const modalStyle = css`
  bottom: 0; // ❗ the modal will come here
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 480px;
  width: 100%;
  height: 320px;
  padding: 42px 22px 98px;
  border-radius: 5px 5px 0 0;
  background: #fdfdfd;
  overflow: hidden;
`;
```

<br>

### direction ("top" | "right" | "center" | "left" | "bottom" | "none")

You can change the direction of the modal animation (slide).<br>
⚠️ [Caution] mind the modal's location (modalStyle).<br>

The default direction is `none`.

<br>

### backdropColor (string)

You can change the modal's backdrop color.<br>

Its default is `rgba(0, 0, 0, 0.3)`.

<br>

### buttonContent (ReactNode)

You can put components(ReactNode) in the close button.
This button's default is `닫기`.

<br>

### modalButtonStyle (CSSProp)

You can design a close button.

> Example

```ts
const buttonStyle = css`
  width: 100%;
  position: fixed;
  bottom: 32px; // ❗ the position of the close button
  padding: 12px 0;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 8px;
  background: transparent;

  &:hover {
    background: #fefefe;
    color: #333;
    border: 1px solid #333;
    transform: scale(1.014);
  }

  &:active {
    bottom: 26px;
  }
`;
```

<br>

---

<br>
<br>

## Development Environment

- `React(create-react-app)`
- `TypeScript`
- `Styled-components`

## Browser Support

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome icon" />
    </td>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png" alt="Safari icon" />
    </td>
  </tr>
  <tr>
    <td align="center">
      Latest ✓
    </td>
    <td align="center">
      Latest ✓
    </td>
  </tr>
</table>
