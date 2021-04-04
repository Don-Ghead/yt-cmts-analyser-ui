import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "@material-ui/core";

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