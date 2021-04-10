import React, {createContext, useContext} from 'react';

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext);

const AppContextWrapper = ({children}) => {

    return (
        <AppContext.Provider value={{}} >
            {children}
        </AppContext.Provider>
    );
}

export default AppContextWrapper;