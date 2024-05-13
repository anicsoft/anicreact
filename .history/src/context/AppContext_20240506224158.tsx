import React, { ReactNode, createContext, useState } from 'react';


interface BaseState {
  viewType: string;
  filterDrawerOpened: boolean;
}

const AppContext = createContext<BaseState>({
  viewType: 'map',
  filterDrawerOpened: false,
});

function AppContextProvider({ children }: { children: ReactNode }) {
  
  const [viewType, _setViewType] = useState<string>('map');
  const [filterDrawerOpened, _setFilterDrawerOpened] = useState<boolean>(false);


  const values = {
    viewType,
    filterDrawerOpened,
    _setViewType,
    _setFilterDrawerOpened
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export {AppContextProvider};