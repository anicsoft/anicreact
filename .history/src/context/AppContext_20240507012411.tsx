import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode, createContext, useState } from 'react';


interface BaseState {
  viewType: string;
  opened: boolean;
  setViewType: (x: string) => void;
  filterDrawerHandlers: {
    open: () => void;
    close: () => void;
    toggle: () => void;
  };
}

export const AppContext = createContext<BaseState>({
  viewType: 'map',
  opened: false,
  setViewType: () => {},
  filterDrawerHandlers: {
    open: () => {},
    close: () => {},
    toggle: () => {}
  }
});

function AppContextProvider({ children }: { children: ReactNode }) {
  
  const [viewType, setViewType] = useState<string>('map');
  // const [filterDrawerOpened, setFilterDrawerOpened] = useState<boolean>(false);
  const [opened, filterDrawerHandlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  });

  const values = {
    viewType,
    opened,
    setViewType,
    filterDrawerHandlers
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;