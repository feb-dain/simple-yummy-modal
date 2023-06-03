import { keyframes } from 'styled-components';

export const openDirection = {
  top: keyframes`
    from {
      top: -100%;
    }
    to {
      top: 0;
    }
  `,

  bottom: keyframes`
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  `,

  right: keyframes`
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  `,

  left: keyframes`
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  `,

  center: keyframes`
    from {
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
    `,

  none: keyframes``,
};

export const closeDirection = {
  top: keyframes`
    from {
      top: 0;
    }
    to {
      top: -100%;
    }
  `,

  bottom: keyframes`
    from {
      bottom: 0;
    }
    to {
      bottom: -100%;
    }
  `,

  right: keyframes`
    from {
      right: 0;
    }
    to {
      right: -100%;
    }
  `,

  left: keyframes`
    from {
      left: 0;
    }
    to {
      left: -100%;
    }
  `,

  center: keyframes`
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(0);
    }
    `,

  none: keyframes``,
};

export const visibilityAnimation = {
  show: keyframes`
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
    `,

  hide: keyframes`
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  `,
};
