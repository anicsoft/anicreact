import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode, createContext, useState } from 'react';


interface BaseState {
  viewType: string;
  filterDrawerOpened: boolean;
  setViewType: (x: string) => void;
  filterDrawerExportHandlers: {
    open: () => void;
    close: () => void;
    toggle: () => void;
  };
}

export const AppContext = createContext<BaseState>({
  viewType: 'map',
  filterDrawerOpened: false,
  setViewType: () => {},
  filterDrawerExportHandlers: {
    open: () => {},
    close: () => {},
    toggle: () => {}
  }
});

function AppContextProvider({ children }: { children: ReactNode }) {
  
  const [viewType, setViewType] = useState<string>('map');
  // const [filterDrawerOpened, setFilterDrawerOpened] = useState<boolean>(false);
  const [filterDrawerOpened, filterDrawerHandlers] = useDisclosure(false, {
    onOpen: () => { console.log("OPENED");
     }, onClose: () => { console.log("CLOSED"); }
  });

  const values = {
    viewType,
    filterDrawerOpened,
    setViewType,
    filterDrawerExportHandlers
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;