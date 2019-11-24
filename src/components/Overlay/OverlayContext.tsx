import { createContext } from 'react';

interface IOverlayContext {
  addTooltip?: (tooltip: React.ReactNode) => void;
  removeTooltip?: () => void;
  addPopover?: (popover: React.ReactNode) => void;
  removePopover?: () => void;
  addModal?: (index: string, popover: React.ReactNode) => void;
  removeModal?: (index: string) => void;
}

export const OverlayContext = createContext<IOverlayContext>({});
