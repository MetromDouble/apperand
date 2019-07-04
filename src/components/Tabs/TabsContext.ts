import { createContext } from 'react';

interface ITabsContext {
  addTabHead?: (index: string, head: React.ReactNode, onSelect?: () => void, order?: number) => void;
  addTabBody?: (index: string, body: React.ReactNode) => void;
  removeTab?: (index: string) => void;
  selectTab?: (index: string) => void;
}

export const TabsContext = createContext<ITabsContext>({});
