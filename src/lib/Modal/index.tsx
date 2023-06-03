import { Dispatch, SetStateAction, KeyboardEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { CSSProp, css } from 'styled-components';
import { openDirection, closeDirection, visibilityAnimation } from './modal.style';
import Button from './Button';

interface Props {
  openTrigger: Dispatch<SetStateAction<boolean>>;
  isTriggered: boolean;
  children: ReactNode;
  modalStyle: CSSProp;
  initialState?: boolean;
  direction?: Direction;
  backdropColor?: string;
  buttonContent?: ReactNode;
  modalButtonStyle?: CSSProp;
}

type Direction = 'top' | 'right' | 'left' | 'center' | 'bottom' | 'none';

const Modal = ({
  openTrigger,
  isTriggered,
  children,
  modalStyle,
  initialState,
  direction,
  backdropColor,
  buttonContent = '닫기',
  modalButtonStyle,
}: Props) => {
  const handleKeyDownEsc = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (key === 'Escape') openTrigger(false);
  };

  return createPortal(
    <>
      <S.Backdrop
        isTriggered={isTriggered}
        onClick={() => openTrigger(false)}
        backdropColor={backdropColor}
      />

      <S.Modal
        role='dialog'
        aria-labelledby='title-dialog'
        aria-describedby='desc-txt'
        isTriggered={isTriggered}
        direction={direction}
        onKeyDown={handleKeyDownEsc}
        initialState={initialState}
        css={modalStyle}
      >
        {children}

        <Button
          name='닫기 버튼'
          aria-label='닫기'
          onClick={() => openTrigger(false)}
          css={buttonStyle(modalButtonStyle)}
        >
          {buttonContent}
        </Button>
      </S.Modal>
    </>,
    document.body
  );
};

const S = {
  Backdrop: styled.div<{ backdropColor?: string; isTriggered: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: ${({ backdropColor = 'rgba(0, 0, 0, 0.3)' }) => backdropColor};
    opacity: 0;
    visibility: hidden;
    cursor: pointer;

    animation: ${({ isTriggered }) =>
        isTriggered ? visibilityAnimation['show'] : visibilityAnimation['hide']}
      0.8s forwards;
  `,

  Modal: styled.div<{
    isTriggered: boolean;
    direction?: Direction;
    initialState?: boolean;
    css: CSSProp;
  }>`
    display: ${({ initialState }) => !initialState && 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    width: 50%;
    padding: 24px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    background: #fff;
    opacity: 0;
    visibility: hidden;

    ${({ css }) => css}

    animation: ${({ isTriggered, direction = 'none' }) =>
      isTriggered
        ? css`
            ${openDirection[direction]} 0.6s forwards, ${visibilityAnimation['show']} 0.6s forwards
          `
        : css`
            ${closeDirection[direction]} 0.6s forwards, ${visibilityAnimation['hide']} 0.6s forwards
          `};
  `,
};

const buttonStyle = (prop?: CSSProp) => css`
  width: 100%;
  margin-top: 26px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--text-color);

  &:hover {
    color: #fff;
    background: var(--text-color);
  }

  ${prop}
`;

export default Modal;
