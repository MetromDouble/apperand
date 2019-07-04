import React, { useState } from 'react';
import styled from 'styled-components';

import { TabsContext } from './TabsContext';

import { TabsHeadWrapper } from './TabsHeadWrapper';
import { TabsBodyWrapper } from './TabsBodyWrapper';
import { TabHeadItem } from './TabHeadItem';

export * from './TabHead';
export * from './TabBody';

interface ITabData {
  head: React.ReactNode;
  body: React.ReactNode;
  order?: number;
  selected?: boolean;
  onSelect?: () => void;
}

interface ITabsState {
  [index: string]: ITabData
}
interface ITabsProps {
}
export const Tabs = React.memo<ITabsProps>(
  ({
    children
  }) => {
    const [tabs, setTabs] = useState<any>({});

    const addTabHead = (index: string, head: React.ReactNode, onSelect?: () => void, order?: number) => {
      if (tabs[index] && tabs[index].head) return;
      setTabs((oldTabs: ITabsState) => {
        return {
          ...oldTabs,
          [index]: {
            ...oldTabs[index],
            head,
            order,
            onSelect,
          },
        };
      });
    };

    const addTabBody = (index: string, body: React.ReactNode) => {
      if (tabs[index] && tabs[index].body) return;

      setTabs((oldTabs: ITabsState) => {
        return {
          ...oldTabs,
          [index]: {
            ...oldTabs[index],
            body,
          },
        };
      });
    };

    const removeTab = (index: string) => {
      setTabs((oldTabs: ITabsState) => {
        return Object.keys(oldTabs).filter(key => key === index)
          .reduce((newTabs: ITabsState, key: string) => {
            newTabs[key] = oldTabs[key];
            return newTabs;
          }, {});
      });
    };

    const selectTab = (index: string) => {
      if (tabs[index] && tabs[index].selected) return;

      setTabs((oldTabs: ITabsState) => {
        return Object.keys(oldTabs)
          .reduce((newTabs: ITabsState, key: string) => {
            newTabs[key] = oldTabs[key];
            if (key !== index) {
              delete newTabs[key].selected;
            } else {
              newTabs[key].selected = true;
            }
            return newTabs;
          }, {})
      });
    };

    const maxInt = Number.MAX_SAFE_INTEGER;

    return (
      <TabsContext.Provider
        value={{
          addTabHead,
          addTabBody,
          removeTab,
          selectTab,
        }}
      >
        {children}
        <TabsHeadWrapper>
          {Object.keys(tabs)
            .sort((a, b) => (tabs[a].order || maxInt) - (tabs[b].order || maxInt))
            .map(key => (
              <TabHeadItem key={key} onClick={tabs[key].onSelect} active={tabs[key].selected}>
                {tabs[key].head}
              </TabHeadItem>
            ))
          }
        </TabsHeadWrapper>
        <TabsBodyWrapper>
          {Object.keys(tabs).filter(key => tabs[key].selected).map(key => tabs[key].body)}
        </TabsBodyWrapper>
      </TabsContext.Provider>
    );
  }
);
