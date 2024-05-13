import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode, createContext, useState } from 'react';


interface BaseState {
  viewType: string;
  filterDrawerOpened: boolean;
  setViewType: (x: string) => void;
  filterDrawerHandlers: {
    open :() => void,
    close :() => void
  };
}

export const AppContext = createContext<BaseState>({
  viewType: 'map',
  filterDrawerOpened: false,
  setViewType: () => {},
  filterDrawerHandlers: {
    open: () => { },
    close: () => { }
  }
});

function AppContextProvider({ children }: { children: ReactNode }) {
  
  const [viewType, setViewType] = useState<string>('map');
  // const [filterDrawerOpened, setFilterDrawerOpened] = useState<boolean>(false);
  const [filterDrawerOpened, filterDrawerHandlers] = useDisclosure(false, {
    open: () => { }, close: () => { }
  });

  const values = {
    viewType,
    filterDrawerOpened,
    setViewType,
    filterDrawerHandlers
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;