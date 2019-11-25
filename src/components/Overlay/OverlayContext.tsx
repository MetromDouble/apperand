import { createContext } from 'react';

import { OverlayType } from './OverlayTrigger';

interface IOverlayContext {
  addTooltip: (id: string, tooltip: React.ReactNode) => void;
  removeTooltip: (id: string) => void;
  addPopover: (id: string, popover: React.ReactNode) => void;
  removePopover: (id: string) => void;
  addModal: (id: string, popover: React.ReactNode) => void;
  removeModal: (id: string) => void;
  show: (id: string, type: OverlayType) => void;
  hide: (id: string, type: OverlayType) => void;
}
export const OverlayContext = createContext<IOverlayContext>({
  addTooltip: () => {},
  removeTooltip: () => {},
  addPopover: () => {},
  removePopover: () => {},
  addModal: () => {},
  removeModal: () => {},
  show: () => {},
  hide: () => {},
});
