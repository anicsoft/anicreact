import React, { ReactNode, createContext, useState } from 'react';


interface BaseState {
  viewType: string;
  filterDrawerOpened: boolean;
  setViewType: (x: boolean) => void;
  setFilterDrawerOpened: (x: boolean) => void;
}

export const AppContext = createContext<BaseState>({
  viewType: 'map',
  filterDrawerOpened: false,
  setViewType: () => {},
  setFilterDrawerOpened: () => {}
});

function AppContextProvider({ children }: { children: ReactNode }) {
  
  const [viewType, setViewType] = useState<string>('map');
  const [filterDrawerOpened, setFilterDrawerOpened] = useState<boolean>(false);


  const values = {
    viewType,
    filterDrawerOpened,
    setViewType,
    setFilterDrawerOpened
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;