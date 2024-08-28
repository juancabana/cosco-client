/**
 * Shared UI Components
 */

import React, { type FC, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isVisible?: boolean;
}

/**
 * Renders a customizable screen component.
 */
const Screen: FC<PropsWithChildren<Props>> = ({ children, isVisible }) =>
  isVisible
    ? createPortal(
        <dialog
          className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-transparent p-6"
          open
          data-screen
        >
          {children}
        </dialog>,
        document.body,
      )
    : null;

export default Screen;
