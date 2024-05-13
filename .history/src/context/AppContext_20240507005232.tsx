import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode, createContext, useState } from 'react';


interface BaseState {
  viewType: string;
  filterDrawerOpened: boolean;
  setViewType: (x: string) => void;
  filterDrawerHandlers: {
    onOpen :() => void,
    onClose :() => void
  };
}

export const AppContext = createContext<BaseState>({
  viewType: 'map',
  filterDrawerOpened: false,
  setViewType: () => {},
  filterDrawerHandlers: {
    onOpen: () => { },
    onClose: () => { }
  }
});

function AppContextProvider({ children }: { children: ReactNode }) {
  
  const [viewType, setViewType] = useState<string>('map');
  // const [filterDrawerOpened, setFilterDrawerOpened] = useState<boolean>(false);
  const [filterDrawerOpened, filterDrawerHandlers] = useDisclosure(false);

  const values = {
    viewType,
    filterDrawerOpened,
    setViewType,
    filterDrawerHandlers
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;