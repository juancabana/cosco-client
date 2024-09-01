/**
 * Shared UI Components
 */

import React, { type FC } from 'react';

import imgLogoSpinner from '@/assets/img_logoSpinner.svg';

import Screen from './screen';

interface Props {
  isVisible?: boolean;
}

/**
 * Renders a customizable screenLoader component.
 */
const ScreenLoader: FC<Props> = ({ isVisible }) => (
  <Screen isVisible={isVisible}>
    <div className="fixed h-full w-full bg-cosco-500 opacity-30" />
    <img
      src={imgLogoSpinner}
      alt="Spinner"
      width="100"
      height="100"
      className="fixed z-10 animate-spin"
      data-testid="Spinner"
    />
  </Screen>
);

export default ScreenLoader;
