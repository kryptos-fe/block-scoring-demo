import { createContext, useContext } from 'react';

const AppContext = createContext(undefined);
export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        test: 1,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be inside the AppProvider');
  }

  return context;
};
